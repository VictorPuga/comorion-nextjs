import SHA256 from "crypto-js/sha256";
import useLocalStorage from "./useLocalStorage";
export default function useAdminValidation(): [
  boolean,
  (password: string) => void
] {
  const today = new Date().toLocaleString().split(":")[0];
  const hash = SHA256("cyndiesfitymedueleelombligo" + today).toString();
  const [hashedPassword, setHashedPassword] = useLocalStorage<string>(
    "abcdefg",
    "none"
  );
  function validatePassword(password: string) {
    const hashed = SHA256(password + today).toString();
    setHashedPassword(hashed);
  }
  return [hashedPassword === hash, validatePassword];
}
