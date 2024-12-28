"use client";

import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import { EditorContent, mergeAttributes, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import MenuBar from "./menu-bar";

type EditorProps = {
    content?: string;
    placeholder?: string;
    name: string;
    onChange: (content: string) => void;
};

export const TipTap = ({
    content = "",
    placeholder = "",
    name,
    onChange,
    ...props
}: EditorProps) => {
    const MyHeading = Heading.extend({
        levels: [2, 3, 4],
        renderHTML({ node, HTMLAttributes }) {
            const level = this.options.levels.includes(node.attrs.level)
                ? node.attrs.level
                : this.options.levels[0];

            const classes = {
                2: "text-3xl font-bold",
                3: "text-2xl font-bold",
                4: "text-xl font-bold",
            };

            return [
                `h${level}`,
                mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                    // @ts-ignore
                    class: `${classes[level]}`,
                }),
                0,
            ];
        },
    }).configure({
        levels: [2, 3, 4],
    });

    const editor = useEditor({
        extensions: [
            Bold,
            Document,
            Paragraph,
            Text,
            MyHeading,
            Blockquote.configure({}),
            Placeholder.configure({
                placeholder,
            }),
            StarterKit.configure({
                heading: false,
                listItem: false,
                bulletList: false,
                orderedList: false,
                blockquote: false,
            }),
            BulletList.configure({}),
            OrderedList.configure({}),

            ListItem,
            Underline,
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "border-y min-h-20 bg-background text-foreground",
            },
        },
    });

    return (
        <div className="w-full border bg-background text-foreground  mdEditor">
            {editor && <MenuBar editor={editor} />}
            <EditorContent {...props} name={name} editor={editor} />
        </div>
    );
};
