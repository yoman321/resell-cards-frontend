import { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginButton = () => {
    try {
      console.log("email:" + email)
      console.log("password:" + password)
    }
    catch (e) {
      console.log("Failed to login with: either wrong email or password")
    }

  }
  return (
    <div className="flex flex-wrap content-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please login to access your inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="flex justify-self-start" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Your Email"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="flex justify-self" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Your Password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleLoginButton}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
