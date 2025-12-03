import Link from "next/link";

export default function BackToCourseLink({ courseId }: { courseId: string }) {
  return (
    <Link
      href={`/courses/${courseId}`}
      className="inline-block mb-8 text-current hover:text-opacity-80 font-bold text-lg transition"
    >
      ← Back to Bible in a Year
    </Link>
  );
}