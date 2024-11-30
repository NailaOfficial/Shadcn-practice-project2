"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDemo() {
  const data = [
    { name: "Zara", age: "25" },
    { name: "Sara", age: "28" },
    { name: "Farah", age: "30" },
  ];

  const [emojiSearch, setEmojiSearch] = useState<string>("");

  const emojis = [
    { name: "Grinning Face", emoji: "😀" },
    { name: "Face with Tears of Joy", emoji: "😂" },
    { name: "Smiling Face with Sunglasses", emoji: "😎" },
    { name: "Thumbs Up", emoji: "👍" },
    { name: "Party Popper", emoji: "🎉" },
    { name: "Red Heart", emoji: "❤️" },
    { name: "Sparkles", emoji: "✨" },
    { name: "Fire", emoji: "🔥" },
    { name: "Rocket", emoji: "🚀" },
    { name: "Pizza", emoji: "🍕" },
  ];

  // Handle user search
  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(emojiSearch.toLowerCase())
  );

  // Handle emoji search
  const filteredEmojis = emojis.filter((item) =>
    item.name.toLowerCase().includes(emojiSearch.toLowerCase())
  );

  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenCalendar = () => {
    const today = new Date();
    const formattedDate = format(today, "EEEE, MMMM d, yyyy");
    setSelectedDate(formattedDate);
    alert(`Today's Date: ${formattedDate}`);
  };

  const handleCalculatorOperation = () => {
    const result = prompt("Enter a simple math operation (e.g., 5 + 3):");
    try {
      const evaluatedResult = eval(result || "");
      alert(`The result is: ${evaluatedResult}`);
    } catch (error) {
      alert("Invalid math operation. Please try again.");
    }
  };

  return (
    <div>
      <Command className="bg-teal-200 rounded-lg border-2 border-emerald-400 shadow-md md:min-w-[450px]">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search emojis or users..."
          className="p-2 border rounded mb-2 w-full"
          value={emojiSearch}
          onChange={(e) => setEmojiSearch(e.target.value)}
        />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Group for Static Suggestions */}
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={handleOpenCalendar}>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem onSelect={handleCalculatorOperation}>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* Group for Dynamic Data (User Data) */}
          <CommandGroup heading="User Names">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <CommandItem key={index}>
                  <User />
                  <span>
                    {user.name} - Age: {user.age}
                  </span>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No matching users found.</CommandEmpty>
            )}
          </CommandGroup>

          <CommandSeparator />

          {/* Emoji Search Group */}
          <CommandGroup heading="Search Results for Emojis">
            {filteredEmojis.length > 0 ? (
              filteredEmojis.map((item, index) => (
                <CommandItem key={index}>
                  <span>
                    {item.emoji} {item.name}
                  </span>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No matching emojis found.</CommandEmpty>
            )}
          </CommandGroup>

          <CommandSeparator />

          {/* Group for Settings */}
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>

        {/* Selected Date Display */}
        {selectedDate && (
          <div className="mt-4 p-2 border-t">
            <p>📅 Selected Date: {selectedDate}</p>
          </div>
        )}
      </Command>
    </div>
  );
}
