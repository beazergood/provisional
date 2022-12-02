import React from "react";
import Link from "next/link";
import { Session } from "@supabase/auth-helpers-react";
import {
	Button,
	ButtonGroup,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
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
}) {
	return (
		<Stack gap={4}>
			<Link href="/">
				<Button as="a">Courses</Button>
			</Link>

			<Card title="Manage Your Account">
				<CardHeader>
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
				</CardHeader>
				<CardBody>
					<FormControl>
						<FormLabel>Email address</FormLabel>
						<Input type="email" value={session?.user.email} />
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
				</CardBody>
				<CardFooter>
					<ButtonGroup>
						<Button
							className="button primary block"
							onClick={() => updateProfile({ username, website, avatar_url })}
						>
							{"Update"}
						</Button>
						<Button onClick={onSignOut}>Sign Out</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</Stack>
	);
}
