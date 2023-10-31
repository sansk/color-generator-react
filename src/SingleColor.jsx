import { toast } from "react-toastify";

export const SingleColor = ({ index, color }) => {
  const saveToClipboard = async () => {
    if (!navigator.clipboard) {
      toast.error("Clipboard access not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(`#${color.hex}`);
      toast.success("Color copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy color to clipboard");
    }
  };

  return (
    <article
      className={index > 4 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${color.hex}` }}
      onClick={saveToClipboard}>
      <p>
        Type: {color.type} - {color.weight}%
      </p>
      <p>HEX: #{color.hex}</p>
      <p>RGB: {color.rgb}</p>
      <p>Alpha: {color.alpha}</p>
      <p>HSL: {color.hsl}</p>
    </article>
  );
};
