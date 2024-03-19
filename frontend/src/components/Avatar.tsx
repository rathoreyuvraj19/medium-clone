const Avatar = ({ name }: { name: string | undefined }) => {
  if (!name) return null; // Ensure name is defined before processing

  return (
    <div className="mr-2">
      <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden p-6 bg-gray-200 rounded-full dark:bg-gray-600">
        <span className="font-bold text-gray-600 dark:text-gray-300">
          {name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
