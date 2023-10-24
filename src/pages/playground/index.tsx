/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import Button from "@/modules/common/components/Button";
import Card from "@/modules/common/components/Card";
import Input from "@/modules/common/components/Input";
import NavBar from "@/modules/common/components/NavBar";

const index = () => {
  const [search, setSearch] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex w-full justify-center bg-gray-900 pb-32">
      <NavBar />
      <div className="flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-12 bg-gray-800 p-6 pt-32">
        <Buttons />
        <Input
          label="Email"
          placeholder="Email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Input
          label="Email"
          placeholder="Email"
          value="dwdad"
          onChange={(e) => console.log(e.target.value)}
          error="Not a valid email address."
        />
        <Input
          label="Email"
          placeholder="Email"
          value="dwdad"
          onChange={(e) => console.log(e.target.value)}
          isDisabled
        />
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla"
          imageSrc="https://www.meatspace.cz/site/assets/files/6611/ku_club_bar-meatspace-_sk.jpg"
          price={100}
          title="Card title"
        />
      </div>
    </div>
  );
};

export default index;

const Buttons = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button
          size="sm"
          color="primary"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="md"
          color="primary"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="lg"
          color="primary"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          color="primary"
          isLoading
          className="w-[81px]"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="md"
          color="primary"
          isLoading
          className="w-[91px]"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="lg"
          color="primary"
          isLoading
          className="w-[95px]"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          color="primary"
          disabled
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="md"
          color="primary"
          disabled
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="lg"
          color="primary"
          disabled
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          color="secondary"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="md"
          color="secondary"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="lg"
          color="secondary"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          color="secondary"
          isLoading
          className="w-[81px]"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="md"
          color="secondary"
          isLoading
          className="w-[91px]"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="lg"
          color="secondary"
          isLoading
          className="w-[95px]"
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          color="secondary"
          disabled
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="md"
          color="secondary"
          disabled
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
        <Button
          size="lg"
          color="secondary"
          disabled
          onClick={() => console.log("clicked")}
        >
          Button text
        </Button>
      </div>
    </div>
  );
};
