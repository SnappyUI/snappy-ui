import { ArrowRight, Bell, Edit, FileText, LogOut, Plus, Settings, Trash, User } from "lucide-react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuAction,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuFooter,
  DropdownMenuGroup,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/snappy-dropdown";

import Button from "./ui/snappy-button";
import Check from "./ui/snappy-checkbox";
import { ColourfulText } from "./ui/snappy-colorful-text";
import { TextTypingEffect } from "./ui/snappy-text-generate";

function Components() {
  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto bg-black text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-3 text-blue-400 animate-slide-up">
        Production-ready components
      </h2>
      <p
        className="text-gray-400 text-center mb-12 text-sm md:text-base animate-slide-up"
        style={{ transitionDelay: "100ms" }}
      >
        Beautiful and powerful, right out of the box.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up rounded-xl overflow-hidden"
        style={{ transitionDelay: "200ms" }}
      >
        {/* Column 1 - Button */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-900/80">
          <div className="mb-6 text-lg font-medium text-blue-400">Button Component</div>
          <Button variant="moving-border" borderColor="#0ea5e9" size="lg">
            This is Button
          </Button>
        </div>

        {/* Column 2 - Checkbox */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-900/80">
          <div className="mb-6 text-lg font-medium text-blue-400">Checkbox Component</div>
          <div className="flex items-center gap-2 group">
            <Check
              label="Accept terms and conditions"
              variant="jello"
            />
          </div>
        </div>

        {/* Column 3 - Text */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-900/80">
          <div className="mb-6 text-lg font-medium text-blue-400">Text Component</div>
          <div className="transition-all duration-300 text-4xl">
            <span className="font-medium">Let&#39;s try </span>
            <ColourfulText text="Snappy UI." />
          </div>
        </div>

        {/* Column 4 - Dropdown */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-900/80">
          <div className="mb-6 text-lg font-medium text-blue-400">Dropdown Component</div>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-400  transition-colors duration-200">
              User Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-900 border border-gray-800" side="bottom">
              <DropdownMenuHeader
                title="John Doe"
                description="john.doe@example.com"
                icon={<User className="text-blue-400" />}
              />

              <DropdownMenuGroup>
                <DropdownMenuLabel badge="3">Account</DropdownMenuLabel>
                <DropdownMenuItem icon={<User className="text-blue-400" />}>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem
                  icon={<Settings className="text-blue-400" />}
                  description="Manage your account settings and preferences"
                >
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem icon={<Bell className="text-blue-400" />} iconRight={<ArrowRight />}>
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel>Content</DropdownMenuLabel>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger icon={<FileText className="text-blue-400" />}>
                    Documents
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-gray-900 border border-gray-800">
                    <DropdownMenuItem icon={<Plus className="text-blue-400" />}>New Document</DropdownMenuItem>
                    <DropdownMenuItem icon={<Edit className="text-blue-400" />}>Edit</DropdownMenuItem>
                    <DropdownMenuItem icon={<Trash className="text-blue-400" />}>Delete</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuCheckboxItem
                  description="Enable dark mode for better viewing at night"
                  checked={true}
                >
                  Dark Mode
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuRadioGroup value="public">
                <DropdownMenuLabel>Visibility</DropdownMenuLabel>
                <DropdownMenuRadioItem value="public" description="Anyone can see this document">
                  Public
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="private" description="Only you can access this document">
                  Private
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>

              <DropdownMenuFooter>
                <DropdownMenuAction variant="outline">
                  Help
                </DropdownMenuAction>
                <DropdownMenuAction variant="ghost">
                  <LogOut className="mr-2 h-4 w-4 text-blue-400" />
                  Logout
                </DropdownMenuAction>
              </DropdownMenuFooter>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Column 5 - Animated Text */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-900/80">
          <div className="mb-6 text-lg font-medium text-blue-400">Text Typing Effect</div>
          <TextTypingEffect
            words="Welcome to Snappy UI."
            typingSpeed={0.2}
            className="text-3xl text-blue-400"
          />
        </div>

        {/* Column 6 - Learn More */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-start justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-900/80">
          <div className="mb-6 text-lg font-medium text-blue-400 self-center">Documentation</div>
          <div className="mb-4 text-lg font-medium">Want to see more?</div>
          <p className="text-sm text-gray-400 mb-4">
            Check out the docs for details of the complete library
          </p>
          <div className="text-blue-400 text-sm font-medium group flex items-center transition-all duration-300 hover:translate-x-1 cursor-pointer">
            Learn More
            <span className="transition-transform duration-300 inline-block group-hover:translate-x-1 ml-1">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Components;
