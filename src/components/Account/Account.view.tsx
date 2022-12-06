import React from "react";
import { Session } from "@supabase/auth-helpers-react";
import {
	Box,
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from "@chakra-ui/react";

import Avatar from "../Avatar/Avatar.view";

export default function Account({
	user,
	username,
	website,
	avatar_url,
	setAvatarUrl,
	updateProfile,
	setUsername,
	session,
	onSignOut,
	setWebsite,
	setEmail,
}: {
	user: any;
	username: string;
	website: string;
	avatar_url: string;
	setAvatarUrl: (url: string) => void;
	updateProfile: ({
		username,
		website,
		avatar_url,
	}: {
		username: string;
		website: string;
		avatar_url: string;
	}) => void;
	setUsername: (url: string) => void;
	session: Session;
	onSignOut: () => void;
	setWebsite: (val: string) => void;
	setEmail: (val: string) => void;
}) {
	return (
		<Box boxSize="lg">
			<Stack gap={4}>
				{user && (
					<Avatar
						uid={user.id}
						url={avatar_url}
						size={150}
						onUpload={(url) => {
							setAvatarUrl(url);
							updateProfile({ username, website, avatar_url: url });
						}}
					/>
				)}

				<FormControl>
					<FormLabel>Email address</FormLabel>
					<Input
						type="email"
						value={session?.user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormControl>

				<FormControl>
					<FormLabel>Username</FormLabel>
					<Input
						type="text"
						value={username || ""}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</FormControl>

				<FormControl>
					<FormLabel>Website</FormLabel>
					<Input
						type="text"
						value={website || ""}
						onChange={(e) => setWebsite(e.target.value)}
					/>
				</FormControl>

				<ButtonGroup>
					<Button
						className="button primary block"
						onClick={() => updateProfile({ username, website, avatar_url })}
					>
						{"Update"}
					</Button>
					<Button onClick={onSignOut}>Sign Out</Button>
				</ButtonGroup>
			</Stack>
		</Box>
	);
}
