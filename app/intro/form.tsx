import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function IntroPage() {
  return (
    <div className="text-[#DFD0B8] py-6">
      <h1 className="text-4xl">Hi, there!</h1>
      <h2 className="text-2xl">Welcome to the Medicine Reminder App</h2>
      
      <Card className="w-full max-w-sm mt-4">
        <CardHeader>
          <CardDescription>
            Please enter your information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Shah"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="birthyear">Birth Year</Label>
                </div>
                <Input id="birthyear" type="number" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
