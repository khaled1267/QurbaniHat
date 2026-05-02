"use client";
import React from "react";
import { Person } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

export function Profileupdate() {
  const router = useRouter();

  const onsubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;

    await authClient.updateUser({
      name,
      image: imageUrl,
    });

    router.push("/");
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="w-full bg-[#97C459] text-[#173404] font-semibold text-sm py-2.5 rounded-xl hover:bg-[#C0DD97] transition">
        ✏️ প্রোফাইল আপডেট করুন
      </Button>

      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-[480px] rounded-2xl p-2 bg-[#1a3a0a] border border-[#3B6D11]">

            {/* Close Button */}
            <Modal.CloseTrigger className="top-6 right-6 bg-[#2d5a14] hover:bg-[#3B6D11] rounded-full p-1.5 transition text-[#97C459]" />

            {/* Header */}
            <Modal.Header className="flex flex-col items-start gap-4 px-8 pt-8">
              <div className="bg-[#2d5a14] border border-[#3B6D11] text-[#97C459] p-3 rounded-xl">
                <Person className="size-6" />
              </div>
              <div>
                <Modal.Heading className="text-xl font-bold text-[#EAF3DE] tracking-tight">
                  প্রোফাইল আপডেট
                </Modal.Heading>
                <p className="text-xs text-[#639922] mt-1">
                  নাম ও ছবি পরিবর্তন করুন
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-8 py-6">
              <form
                id="update-user-form"
                onSubmit={onsubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <TextField
                  className="w-full flex flex-col gap-1.5"
                  name="name"
                >
                  <Label className="text-xs text-[#97C459] font-medium ml-1">
                    নাম
                  </Label>
                  <Input
                    placeholder="আপনার নাম লিখুন"
                    classNames={{
                      inputWrapper: "bg-[#0f2206] border border-[#3B6D11] rounded-xl h-12 px-4 hover:border-[#97C459]",
                      input: "text-[#EAF3DE] text-sm placeholder:text-[#639922]",
                    }}
                  />
                </TextField>

                {/* Image URL */}
                <TextField
                  className="w-full flex flex-col gap-1.5"
                  name="imageUrl"
                >
                  <Label className="text-xs text-[#97C459] font-medium ml-1">
                    ছবির লিংক (Image URL)
                  </Label>
                  <Input
                    placeholder="https://example.com/photo.jpg"
                    classNames={{
                      inputWrapper: "bg-[#0f2206] border border-[#3B6D11] rounded-xl h-12 px-4 hover:border-[#97C459]",
                      input: "text-[#EAF3DE] text-sm placeholder:text-[#639922]",
                    }}
                  />
                </TextField>
              </form>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="px-8 pb-8 pt-2 flex justify-end gap-3">
              <Button
                slot="close"
                className="rounded-xl px-6 py-2.5 font-medium text-sm bg-[#0f2206] text-[#97C459] border border-[#3B6D11] hover:bg-[#2d5a14] transition"
              >
                বাতিল করুন
              </Button>
              <Button
                type="submit"
                form="update-user-form"
                className="rounded-xl px-8 py-2.5 font-semibold text-sm bg-[#97C459] text-[#173404] hover:bg-[#C0DD97] transition"
              >
                ✅ সেভ করুন
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}