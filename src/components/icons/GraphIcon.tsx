import { FC } from "react";

const GraphIcon: FC<{
  width?: number;
  height?: number;
  fill?: string;
}> = ({ width = 16, height = 20, fill = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12C2 16.714 2 19.071 3.464 20.535C4.93 22 7.286 22 12 22C16.714 22 19.071 22 20.535 20.535C22 19.072 22 16.714 22 12C22 7.286 22 4.929 20.535 3.464C19.072 2 16.714 2 12 2C7.286 2 4.929 2 3.464 3.464ZM17.576 10.48C17.6977 10.3266 17.7546 10.1317 17.7345 9.93697C17.7145 9.7422 17.619 9.56301 17.4686 9.43766C17.3182 9.31232 17.1247 9.25076 16.9295 9.26615C16.7344 9.28153 16.5529 9.37264 16.424 9.52L14.627 11.676C14.257 12.121 14.028 12.392 13.841 12.561C13.7921 12.6084 13.7373 12.6494 13.678 12.683L13.667 12.688L13.659 12.684L13.656 12.683C13.5963 12.6495 13.5412 12.6085 13.492 12.561C13.305 12.391 13.077 12.121 12.706 11.676L12.414 11.326C12.086 10.931 11.789 10.576 11.513 10.326C11.212 10.054 10.833 9.812 10.333 9.812C9.833 9.812 9.455 10.054 9.153 10.326C8.877 10.576 8.581 10.931 8.253 11.326L6.423 13.52C6.35997 13.5957 6.31246 13.6831 6.2832 13.7772C6.25393 13.8712 6.24348 13.9701 6.25244 14.0682C6.27054 14.2664 6.3666 14.4492 6.5195 14.5765C6.6724 14.7038 6.8696 14.7652 7.06774 14.7471C7.26587 14.729 7.4487 14.6329 7.576 14.48L9.373 12.324C9.743 11.879 9.972 11.608 10.159 11.439C10.2079 11.3916 10.2627 11.3506 10.322 11.317L10.329 11.314L10.333 11.312L10.344 11.317C10.4037 11.3505 10.4588 11.3915 10.508 11.439C10.695 11.609 10.923 11.879 11.294 12.324L11.586 12.674C11.915 13.069 12.211 13.424 12.487 13.674C12.788 13.946 13.167 14.188 13.667 14.188C14.167 14.188 14.545 13.946 14.847 13.674C15.123 13.424 15.419 13.069 15.747 12.674L17.576 10.48Z"
        fill={fill}
      />
    </svg>
  );
};

export default GraphIcon;
