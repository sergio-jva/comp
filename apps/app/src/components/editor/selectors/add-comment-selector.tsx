import { Button } from "@bubba/ui/button";
import { cn } from "@bubba/ui/cn";
import { MessageSquarePlus, SigmaIcon } from "lucide-react";
import { useEditor } from "novel";

export const AddCommentSelector = () => {
  const { editor } = useEditor();

  if (!editor) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("rounded-none w-12", {
        "text-blue-500": editor.isActive("liveblocksCommentMark"),
      })}
      onClick={() => {
        editor.chain().focus().addPendingComment().run();
      }}
    >
      <MessageSquarePlus
        className={cn("size-4", {
          "text-blue-500": editor.isActive("liveblocksCommentMark"),
        })}
      />
    </Button>
  );
};
