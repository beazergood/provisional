import supabase from "../utils/supabase";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";

import {
  Flashcards,
  FlashcardsData,
} from "../components/Flashcards/Flashcards.view";

const randomImage = () => {
  const imageUrls = [
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/awbrey_glen_golf_club-bend-2.jpeg?t=2022-11-27T20%3A25%3A34.733Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/awbrey_glen_golf_club-bend.jpg",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/bend-gcc.jpg",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/brasada_ranch.jpg",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/broken_top-bend.jpg?t=2022-11-27T20%3A31%3A05.210Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/crosswater.jpg?t=2022-11-27T20%3A31%3A14.691Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/juniper.jpg?t=2022-11-27T20%3A31%3A24.574Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/lost-tracks-golf-club-960.jpeg?t=2022-11-27T20%3A31%3A28.741Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/meadows-crosswater-oregon-usa.jpg?t=2022-11-27T20%3A31%3A37.875Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/rivers-edge-golf-course-bend-oregon.jpg?t=2022-11-27T20%3A31%3A44.007Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/tetherow-bend-or.jpg?t=2022-11-27T20%3A31%3A49.491Z",
    "https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/widgi-creek.jpg?t=2022-11-27T20%3A32%3A33.306Z",
  ];
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

export async function getServerSideProps() {
  const { data } = await supabase.from("oregon-seed-data").select();

  return {
    props: {
      data,
    },
  };
}

export interface CourseCardData {
  id: string;
  architect?: string;
  city?: string;
  image_url?: null;
  name: string;
  public_private?: string;
  state?: string;
  url_slug?: string;
  website?: string;
  year_built?: number;
  zip_code?: number;
}

export default function Test({ data }: { data: CourseDataProps }) {
  console.log(data);

  return (
    <Flex direction={"column"} alignItems={"center"}>
      <h1>Test</h1>
      {data.length}
      {/* {data && <Flashcards data={data} />} */}
    </Flex>
  );
}
