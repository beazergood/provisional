import React, { useCallback, useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button, Image } from "@chakra-ui/react";
// FIXME generate types
import { Database } from '../../utils/database.types'

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Avatar({
	uid,
	url,
	size,
	onUpload,
}: {
	uid: string;
	url: Profiles["avatar_url"];
	size: number;
	onUpload: (url: string) => void;
}) {
	const supabase = useSupabaseClient<Database>();
	const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
	const [uploading, setUploading] = useState(false);

	const downloadImage = useCallback(
		(path: string) =>
			async function downloadImage(path: string) {
				try {
					const { data, error } = await supabase.storage
						.from("avatars")
						.download(path);
					if (error) {
						throw error;
					}
					const url = URL.createObjectURL(data);
					setAvatarUrl(url);
				} catch (error) {
					console.log("Error downloading image: ", error);
				}
			},
		[supabase.storage],
	);

	useEffect(() => {
		if (url) {
			downloadImage(url);
		}
	}, [url, downloadImage]);

	const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
		event,
	) => {
		try {
			setUploading(true);

			if (!event.target.files || event.target.files.length === 0) {
				throw new Error("You must select an image to upload.");
			}

			const file = event.target.files[0];
			const fileExt = file.name.split(".").pop();
			const fileName = `${uid}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: uploadError } = await supabase.storage
				.from("avatars")
				.upload(filePath, file, { upsert: true });

			if (uploadError) {
				throw uploadError;
			}

			onUpload(filePath);
		} catch (error) {
			alert("Error uploading avatar!");
			console.log(error);
		} finally {
			setUploading(false);
		}
	};

	return (
		<div>
			{avatarUrl ? (
				<Image
					style={{ margin: "0 auto" }}
					borderRadius="full"
					boxSize={size}
					src={avatarUrl}
					alt="User image"
				/>
			) : (
				<div
					className="avatar no-image"
					style={{ height: size, width: size }}
				/>
			)}
			<div style={{ width: size, margin: "10px auto", textAlign: "center" }}>
				<label className="button primary block" htmlFor="single">
					<Button>{uploading ? "Uploading ..." : "Upload"}</Button>
				</label>
				<input
					style={{
						visibility: "hidden",
						position: "absolute",
					}}
					type="file"
					id="single"
					accept="image/*"
					onChange={uploadAvatar}
					disabled={uploading}
				/>
			</div>
		</div>
	);
}
