import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Popover } from "@headlessui/react";
import { Button } from "components/Button";
import { Container } from "components/Container";
import { TextInput } from "components/TextInput";
import { Card, CardActions } from "components/Card";
import { PageTitle } from "components/PageTitle";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function Root() {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useLocalStorage("sign_up_form", {});
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSignUpForm({ ...signUpForm, ...data });
    navigate("/more-info");
  };

  return (
    <Container>
      <PageTitle>Sign Up</PageTitle>
      <Card>
        <form id="sign_up" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <TextInput label="First Name" defaultValue={signUpForm.name} {...register("name")} required />

            <TextInput label="Email" defaultValue={signUpForm.email} {...register("email")} required />
            <TextInput label="Password" defaultValue={signUpForm.password} {...register("password")} required />
          </div>
          <CardActions>
            <Button type="submit" form="sign_up">
              Next
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
}
