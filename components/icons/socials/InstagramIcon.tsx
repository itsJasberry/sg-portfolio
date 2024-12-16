import React from "react";

export function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="ri:instagram-fill" clipPath="url(#clip0_3313_8211)">
        <path
          id="Vector"
          d="M12.6824 1.00141C13.5216 0.998195 14.3608 1.00663 15.1997 1.02671L15.4228 1.03476C15.6804 1.04396 15.9345 1.05546 16.2416 1.06926C17.4651 1.12676 18.3 1.31995 19.0325 1.60399C19.7915 1.89608 20.4309 2.29167 21.0702 2.93105C21.6549 3.50558 22.1073 4.20054 22.3962 4.96763C22.6802 5.70016 22.8734 6.53618 22.9309 7.75973C22.9447 8.06562 22.9562 8.32092 22.9654 8.57851L22.9723 8.8016C22.9927 9.64014 23.0015 10.4789 22.9987 11.3177L22.9999 12.1756V13.682C23.0027 14.5212 22.9939 15.3604 22.9734 16.1993L22.9665 16.4224C22.9573 16.68 22.9458 16.9341 22.932 17.2412C22.8745 18.4647 22.679 19.2996 22.3962 20.0321C22.1083 20.8 21.6557 21.4956 21.0702 22.0698C20.4952 22.6544 19.7999 23.1068 19.0325 23.3958C18.3 23.6798 17.4651 23.873 16.2416 23.9305C15.9345 23.9443 15.6804 23.9558 15.4228 23.965L15.1997 23.9719C14.3608 23.9923 13.5216 24.0011 12.6824 23.9983L11.8246 23.9995H10.3193C9.48009 24.0023 8.64092 23.9935 7.802 23.973L7.57891 23.9661C7.30592 23.9562 7.03299 23.9447 6.76013 23.9316C5.53657 23.8741 4.7017 23.6786 3.96803 23.3958C3.20064 23.1075 2.50555 22.655 1.93145 22.0698C1.34617 21.4952 0.893291 20.7998 0.604393 20.0321C0.320353 19.2996 0.127159 18.4647 0.0696611 17.2412C0.0568539 16.9683 0.0453542 16.6954 0.0351623 16.4224L0.0294127 16.1993C0.0082115 15.3604 -0.00137253 14.5212 0.000663528 13.682V11.3177C-0.00254597 10.4789 0.00588797 9.64015 0.0259628 8.8016L0.0340124 8.57851C0.0432121 8.32092 0.0547117 8.06562 0.0685112 7.75973C0.126009 6.53503 0.319203 5.7013 0.603243 4.96763C0.892312 4.20017 1.34608 3.50539 1.9326 2.9322C2.50631 2.34658 3.20096 1.89329 3.96803 1.60399C4.7017 1.31995 5.53542 1.12676 6.76013 1.06926L7.57891 1.03476L7.802 1.02901C8.64053 1.00782 9.47932 0.99824 10.3181 1.00027L12.6824 1.00141ZM11.5003 6.75122C10.7384 6.74044 9.98204 6.88119 9.27507 7.16528C8.5681 7.44937 7.92464 7.87114 7.38208 8.40608C6.83953 8.94101 6.40871 9.57844 6.11465 10.2813C5.82059 10.9842 5.66916 11.7385 5.66916 12.5004C5.66916 13.2624 5.82059 14.0167 6.11465 14.7196C6.40871 15.4225 6.83953 16.0599 7.38208 16.5948C7.92464 17.1298 8.5681 17.5515 9.27507 17.8356C9.98204 18.1197 10.7384 18.2605 11.5003 18.2497C13.0252 18.2497 14.4877 17.6439 15.566 16.5656C16.6443 15.4873 17.2501 14.0248 17.2501 12.4999C17.2501 10.9749 16.6443 9.51245 15.566 8.43415C14.4877 7.35585 13.0252 6.75122 11.5003 6.75122ZM11.5003 9.05114C11.9585 9.0427 12.4139 9.12566 12.8397 9.29517C13.2656 9.46469 13.6534 9.71736 13.9805 10.0384C14.3076 10.3595 14.5674 10.7425 14.7448 11.1652C14.9222 11.5878 15.0136 12.0415 15.0137 12.4999C15.0138 12.9582 14.9225 13.412 14.7453 13.8347C14.568 14.2573 14.3083 14.6405 13.9813 14.9616C13.6543 15.2828 13.2666 15.5356 12.8408 15.7053C12.415 15.8749 11.9597 15.958 11.5014 15.9498C10.5865 15.9498 9.70897 15.5863 9.06199 14.9393C8.41501 14.2923 8.05154 13.4148 8.05154 12.4999C8.05154 11.5849 8.41501 10.7074 9.06199 10.0604C9.70897 9.41346 10.5865 9.04999 11.5014 9.04999L11.5003 9.05114ZM17.5376 5.02628C17.1666 5.04113 16.8157 5.19895 16.5585 5.46668C16.3013 5.73441 16.1576 6.0913 16.1576 6.46258C16.1576 6.83386 16.3013 7.19074 16.5585 7.45848C16.8157 7.72621 17.1666 7.88403 17.5376 7.89888C17.9188 7.89888 18.2844 7.74744 18.554 7.47786C18.8236 7.20829 18.975 6.84266 18.975 6.46143C18.975 6.08019 18.8236 5.71457 18.554 5.445C18.2844 5.17542 17.9188 5.02398 17.5376 5.02398V5.02628Z"
          fill="#778295"
        />
      </g>
      <defs>
        <clipPath id="clip0_3313_8211">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}