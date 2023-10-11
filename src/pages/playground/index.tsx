import Button from "@/modules/common/components/Button";
import React from "react";

const index = () => {
  return (
    <div className="bg-gray-900 w-full h-full flex justify-center">
      <div className="max-w-[1280px] bg-gray-800 w-full min-h-screen items-center flex flex-col p-6 gap-12">
        <Buttons />
        <InputNormal />
        <InputError />
      </div>
    </div>
  );
};

export default index;

function Buttons() {
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
}

function InputNormal() {
  return (
    <div className="w-64">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-200"
      >
        Email
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
    </div>
  );
}

function InputError() {
  return (
    <div className="w-64">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-200"
      >
        Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
          defaultValue="adamwathan"
          aria-invalid="true"
          aria-describedby="email-error"
        />
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        Not a valid email address.
      </p>
    </div>
  );
}
