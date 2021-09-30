import { Path } from "components";

const Ghosts = () => {
  return (
    <g id="ghosts">
      <Path
        id="ghost-3"
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.8056 127.855L85.5321 129.623C84.0856 131.63 83.3057 134.042 83.3025 136.516L83.2931 143.819C83.2913 145.198 83.1133 146.57 82.7636 147.903L81.0633 154.385C80.4175 156.847 81.3305 159.454 83.371 160.975C86.5976 163.38 91.2234 162.149 92.8276 158.458L97.4421 147.841C97.9064 146.773 98.4904 145.76 99.1829 144.824L102.994 139.667C105.877 135.767 105.551 130.361 102.222 126.834C97.9021 122.258 90.4837 122.75 86.8056 127.855ZM89.4135 137.094C90.5529 137.435 91.8258 136.547 92.2566 135.109C92.6875 133.672 92.1131 132.23 90.9737 131.888C89.8343 131.547 88.5613 132.435 88.1305 133.872C87.6997 135.31 88.2741 136.752 89.4135 137.094ZM99.0647 137.15C98.6339 138.587 97.3609 139.476 96.2215 139.134C95.0821 138.793 94.5077 137.35 94.9386 135.913C95.3694 134.476 96.6423 133.587 97.7817 133.929C98.9211 134.27 99.4955 135.712 99.0647 137.15ZM88.006 154.542C89.1454 154.883 90.82 152.655 91.7463 149.564C92.6726 146.474 92.4998 143.692 91.3604 143.35C90.221 143.009 88.5465 145.237 87.6202 148.328C86.6939 151.418 86.8666 154.2 88.006 154.542Z"
        fill="#6D6875"
      />
      <animateTransform
        xlinkHref="#ghost-3"
        attributeName="transform"
        values="0 0;1 5;0 0"
        dur="2s"
        repeatCount="indefinite"
      />
      <Path
        id="ghost-2"
        opacity={0.15}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.9229 110.572L70.4402 111.967C69.892 113.552 69.8549 115.269 70.3342 116.876L71.7487 121.617C72.0157 122.512 72.1672 123.438 72.1996 124.371L72.3569 128.909C72.4166 130.632 73.5164 132.147 75.1367 132.737C77.6988 133.67 80.4617 131.971 80.7849 129.264L81.7146 121.475C81.8082 120.691 81.9903 119.921 82.2575 119.178L83.7278 115.09C84.8402 111.997 83.5775 108.552 80.7301 106.91C77.0364 104.781 72.317 106.543 70.9229 110.572ZM74.4128 116.061C75.2188 116.061 75.8721 115.237 75.8721 114.22C75.8721 113.203 75.2188 112.379 74.4128 112.379C73.6068 112.379 72.9535 113.203 72.9535 114.22C72.9535 115.237 73.6068 116.061 74.4128 116.061ZM80.6879 114.22C80.6879 115.237 80.0345 116.061 79.2285 116.061C78.4226 116.061 77.7692 115.237 77.7692 114.22C77.7692 113.203 78.4226 112.379 79.2285 112.379C80.0345 112.379 80.6879 113.203 80.6879 114.22ZM76.8936 127.66C77.6996 127.66 78.3529 125.888 78.3529 123.702C78.3529 121.516 77.6996 119.743 76.8936 119.743C76.0876 119.743 75.4343 121.516 75.4343 123.702C75.4343 125.888 76.0876 127.66 76.8936 127.66Z"
        fill="#6D6875"
      />
      <animateTransform
        xlinkHref="#ghost-2"
        attributeName="transform"
        values="0 0;2 4;0 0"
        dur="2s"
        repeatCount="indefinite"
      />
      <Path
        id="ghost-1"
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.1092 162.11L94.3814 162.583C93.2667 163.307 92.4276 164.385 91.9988 165.643L90.9239 168.798C90.7 169.455 90.3873 170.079 89.9944 170.651L88.2987 173.122C87.5313 174.241 87.5342 175.717 88.3061 176.832C89.4813 178.53 91.9174 178.727 93.3495 177.239L97.0712 173.371C97.4989 172.927 97.9787 172.536 98.5002 172.206L100.691 170.823C102.898 169.428 103.721 166.608 102.609 164.246C101.274 161.407 97.7398 160.401 95.1092 162.11ZM94.9267 166.859C95.4242 167.229 96.179 167.055 96.6126 166.471C97.0462 165.887 96.9944 165.114 96.4969 164.744C95.9994 164.375 95.2446 164.549 94.811 165.133C94.3774 165.717 94.4293 166.49 94.9267 166.859ZM99.5852 168.677C99.1516 169.262 98.3968 169.436 97.8993 169.066C97.4018 168.697 97.35 167.924 97.7836 167.34C98.2172 166.756 98.972 166.582 99.4695 166.951C99.967 167.321 100.019 168.093 99.5852 168.677ZM91.5121 174.658C92.0096 175.028 93.1686 174.309 94.1008 173.053C95.033 171.798 95.3854 170.48 94.8879 170.111C94.3905 169.742 93.2315 170.46 92.2992 171.716C91.367 172.972 91.0146 174.289 91.5121 174.658Z"
        fill="#6D6875"
      />
      <animateTransform
        xlinkHref="#ghost-1"
        attributeName="transform"
        values="0 0;5 3;0 0"
        dur="2s"
        repeatCount="indefinite"
      />
    </g>
  );
};

export default Ghosts;
