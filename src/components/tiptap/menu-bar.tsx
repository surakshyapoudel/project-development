import { Fragment } from "react";

import { Editor } from "@tiptap/react";

import {
    Bold,
    Heading2,
    Heading3,
    Heading4,
    Italic,
    ListIcon,
    ListOrdered,
    Quote,
    Redo,
    RemoveFormatting,
    SeparatorHorizontal,
    Strikethrough,
    Text,
    Underline,
    Undo,
    WrapText,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { Toggle } from "../ui/toggle";

type MenuBarProps = {
    editor: Editor;
};

const MenuBar = ({ editor }: MenuBarProps) => {
    const items = [
        {
            icon: Bold,
            title: "Bold",
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive("bold"),
        },
        {
            icon: Italic,
            title: "Italic",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic"),
        },
        {
            icon: Strikethrough,
            title: "Strike",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike"),
        },
        {
            icon: Underline,
            title: "Underline",
            action: () => editor.chain().focus().toggleUnderline().run(),
            isActive: () => editor.isActive("underline"),
        },

        {
            type: "divider",
        },
        {
            icon: Heading2,
            title: "Heading 2",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive("heading", { level: 2 }),
        },
        {
            icon: Heading3,
            title: "Heading 3",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: () => editor.isActive("heading", { level: 3 }),
        },
        {
            icon: Heading4,
            title: "Heading 4",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 4 }).run(),
            isActive: () => editor.isActive("heading", { level: 4 }),
        },
        {
            icon: Text,
            title: "Paragraph",
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive("paragraph"),
        },
        {
            icon: ListIcon,
            title: "Bullet List",
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList"),
        },
        {
            icon: ListOrdered,
            title: "Ordered List",
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderedList"),
        },

        {
            type: "divider",
        },
        {
            icon: Quote,
            title: "Blockquote",
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive("blockquote"),
        },
        {
            icon: SeparatorHorizontal,
            title: "Horizontal Rule",
            action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
            type: "divider",
        },
        {
            icon: WrapText,
            title: "Hard Break",
            action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
            icon: RemoveFormatting,
            title: "Clear Format",
            action: () =>
                editor.chain().focus().clearNodes().unsetAllMarks().run(),
        },
        {
            type: "divider",
        },
        {
            icon: Undo,
            title: "Undo",
            action: () => editor.chain().focus().undo().run(),
        },
        {
            icon: Redo,
            title: "Redo",
            action: () => editor.chain().focus().redo().run(),
        },
    ];

    return (
        <div className="flex p-1 py-2 gap-x-2 bg-background items-center text-foreground flex-wrap gap-y-1">
            {items.map((item, index) => {
                const Icon = item.icon!;
                return (
                    <Fragment key={index}>
                        {item.type === "divider" ? (
                            <Separator
                                className=" bg-muted h-8 w-0.5"
                                orientation="vertical"
                            />
                        ) : (
                            <Toggle
                                pressed={item?.isActive?.()}
                                onClick={item.action}
                                type="button"
                                size={"sm"}
                            >
                                <Icon className="w-5 h-5" />
                            </Toggle>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default MenuBar;
