import { BiMoon, BiSun } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export default function StyleMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BiSun
          className="text-2xl"
          role="button"
          onClick={() => setTheme("ligth")}
        />
      );
    } else {
      return (
        <BiMoon
          className="text-2xl"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
        {renderThemeChanger()}
    </div>
  );
}
