import { CloudUpload } from "lucide-react";
import React from "react";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
const SettingPage = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-2xl font-bold mb-4 text-center">
        Profile Settings
      </div>
      <form action="">
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gray-400 size-24 rounded-full"></div>
          </div>
          <div>
            <Button buttonType="google">
              <CloudUpload />
              Change avator
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <FormInput label="Username" placeholder="your your name" />
            <FormInput label="name" placeholder="john doe" />
            <FormInput label="subtitle" placeholder="graphic designer" />
            <FormInput label="bio" placeholder="bio" />
          </div>
          <div className="flex justify-end ">
            <Button buttonType="google">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingPage;
