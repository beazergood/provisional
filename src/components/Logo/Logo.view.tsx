import Link from "next/link";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Logo = ({ variants }: any) => {
	return (
		// <motion.h1
		// 	style={{ textAlign: "center", display: "block" }}
		// 	initial="hidden"
		// 	animate="visible"
		// 	exit="exit"
		// 	variants={variants}
		// >
		<Link href="/">
			<Text fontSize="2xl" fontWeight="extrabold">
				{"🏌🏻‍♂️"}
				{"Provisional"}
			</Text>
		</Link>
		// </motion.h1>
	);
};
