import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAdminValidation from "../hooks/useAdminValidation";
import useEventListener from "../hooks/useEventListener";
export function AdminProtectionWrapper(props: {
  children: JSX.Element;
}): JSX.Element {
  const [isValidated, validatePassword] = useAdminValidation();
  const [code, setCode] = useState<string>("");
  useEventListener("keydown", e =>
    setCode(oldCode => oldCode + (e.key as string))
  );
  const visible = code.includes("orion");
  if (isValidated) return props.children;
  if (visible)
    return (
      <Form
        onSubmit={(e: any) => {
          e.preventDefault();
          validatePassword(
            (document.getElementById("adminpsw") as HTMLInputElement).value
          );
        }}
      >
        <Form.Group controlId="adminpsw">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Admin Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  return (
    <div id="protected">
      <h2>Esta página está restringida</h2>
      <p>
        Si estás viendo esta página, no deberías estar aquí, continúa a{" "}
        <a href="/">la página principal</a>.
      </p>
    </div>
  );
}
export default function withAdminProtection(
  C: () => JSX.Element
): () => JSX.Element {
  return () => (
    <AdminProtectionWrapper>
      <C />
    </AdminProtectionWrapper>
  );
}
