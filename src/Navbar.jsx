import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <>
        <nav className="md:w-full w-[685px] h-12 bg-white flex justify-between items-center">
  <div className="flex gap-2 mx-2 px-3 items-center">
    <svg
      className="w-auto h-6 md:w-auto md:h-8 lg:w-auto lg:h-10"
      viewBox="0 0 249 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.3361 28.075H75.4752L67.0693 10.493V30H64.663V7.06004H67.9034L76.4377 24.9628L84.972 7.06004H88.1483V30H85.7421V10.493L77.3361 28.075ZM98.2031 30.5133C97.0053 30.5133 95.9466 30.2994 95.0268 29.8717C94.1285 29.4225 93.4226 28.8236 92.9093 28.075C92.4173 27.3263 92.1714 26.4708 92.1714 25.5083C92.1714 24.396 92.4815 23.4549 93.1018 22.6849C93.7221 21.8935 94.567 21.2946 95.6364 20.8882C96.7273 20.4818 97.9572 20.2786 99.3261 20.2786H104.203V20.1182C104.203 18.792 103.775 17.7333 102.919 16.9419C102.064 16.1505 100.909 15.7548 99.4544 15.7548C98.4063 15.7548 97.4545 15.9794 96.5989 16.4285C95.7648 16.8777 95.0268 17.4873 94.3851 18.2573L92.7168 16.6531C93.5937 15.712 94.5777 14.9848 95.6685 14.4714C96.7807 13.9581 98.0427 13.7014 99.4544 13.7014C100.866 13.7014 102.096 13.9688 103.144 14.5035C104.214 15.0168 105.037 15.7441 105.615 16.6852C106.213 17.6263 106.513 18.7386 106.513 20.0219V30H104.235V27.7862C103.593 28.6418 102.748 29.3155 101.7 29.8075C100.652 30.2781 99.4865 30.5133 98.2031 30.5133ZM98.4919 28.5241C99.818 28.5241 100.994 28.214 102.021 27.5937C103.048 26.952 103.775 26.0965 104.203 25.027V22.2036H99.6469C98.2138 22.2036 97.016 22.471 96.0535 23.0057C95.1124 23.5191 94.6418 24.3319 94.6418 25.4441C94.6418 26.3852 94.9947 27.1338 95.7006 27.69C96.4064 28.2461 97.3369 28.5241 98.4919 28.5241ZM119.244 13.9581V16.2681H118.602C117.661 16.2681 116.773 16.5141 115.939 17.006C115.105 17.498 114.431 18.268 113.918 19.3161C113.405 20.3641 113.148 21.7224 113.148 23.3907V30H110.774V14.2147H113.116V17.776C113.672 16.3857 114.485 15.4018 115.554 14.8243C116.624 14.2468 117.736 13.9581 118.891 13.9581H119.244ZM124.835 30H122.461V6.89962H124.835V21.3694L133.144 14.2147H136.417L127.401 21.8186L137.315 30H133.786L124.835 22.5245V30ZM152.069 25.5083L153.737 27.0804C152.903 28.1498 151.898 28.9947 150.721 29.615C149.545 30.2139 148.197 30.5133 146.679 30.5133C145.01 30.5133 143.513 30.1497 142.187 29.4225C140.882 28.6953 139.855 27.7007 139.107 26.4387C138.358 25.1767 137.984 23.733 137.984 22.1074C137.984 20.4818 138.337 19.038 139.043 17.776C139.77 16.5141 140.764 15.5195 142.026 14.7922C143.288 14.065 144.721 13.7014 146.326 13.7014C147.866 13.7014 149.224 14.065 150.4 14.7922C151.598 15.4981 152.539 16.4713 153.224 17.7119C153.908 18.9525 154.25 20.3855 154.25 22.0111V22.9415H140.518C140.711 24.5885 141.363 25.9147 142.476 26.9199C143.609 27.9252 145.021 28.4279 146.711 28.4279C148.935 28.4279 150.721 27.4547 152.069 25.5083ZM146.326 15.7868C144.764 15.7868 143.46 16.2681 142.411 17.2306C141.385 18.1717 140.764 19.423 140.551 20.9844H151.748C151.555 19.423 150.956 18.1717 149.951 17.2306C148.946 16.2681 147.737 15.7868 146.326 15.7868ZM166.572 30H162.851C161.738 30 160.872 29.7006 160.252 29.1017C159.653 28.4814 159.353 27.6151 159.353 26.5029V16.236H156.081V14.2147H159.353V9.59466H161.728V14.2147H166.348V16.236H161.728V26.3104C161.728 27.4012 162.273 27.9466 163.364 27.9466H166.572V30ZM172.303 36.2243H169.928V14.2147H172.27V17.2627C172.827 16.1719 173.671 15.3056 174.805 14.6639C175.939 14.0222 177.19 13.7014 178.559 13.7014C180.099 13.7014 181.468 14.0757 182.666 14.8243C183.863 15.5516 184.794 16.5462 185.457 17.8081C186.141 19.0701 186.484 20.5032 186.484 22.1074C186.484 23.733 186.131 25.1767 185.425 26.4387C184.74 27.7007 183.778 28.6953 182.537 29.4225C181.318 30.1497 179.917 30.5133 178.334 30.5133C176.965 30.5133 175.757 30.246 174.709 29.7112C173.661 29.1765 172.859 28.4493 172.303 27.5295V36.2243ZM172.303 22.5886V24.642C172.709 25.7756 173.436 26.6954 174.484 27.4012C175.532 28.0857 176.73 28.4279 178.078 28.4279C179.254 28.4279 180.281 28.1605 181.158 27.6258C182.035 27.0697 182.719 26.3211 183.211 25.3799C183.724 24.4174 183.981 23.3266 183.981 22.1074C183.981 20.8882 183.735 19.808 183.243 18.8669C182.773 17.9044 182.11 17.1558 181.254 16.621C180.398 16.0649 179.404 15.7868 178.27 15.7868C177.115 15.7868 176.088 16.0756 175.19 16.6531C174.292 17.2306 173.586 18.0327 173.073 19.0594C172.559 20.0647 172.303 21.2411 172.303 22.5886ZM192.606 30H190.231V6.89962H192.606V30ZM202.162 30.5133C200.965 30.5133 199.906 30.2994 198.986 29.8717C198.088 29.4225 197.382 28.8236 196.869 28.075C196.377 27.3263 196.131 26.4708 196.131 25.5083C196.131 24.396 196.441 23.4549 197.061 22.6849C197.681 21.8935 198.526 21.2946 199.596 20.8882C200.687 20.4818 201.916 20.2786 203.285 20.2786H208.162V20.1182C208.162 18.792 207.734 17.7333 206.879 16.9419C206.023 16.1505 204.868 15.7548 203.414 15.7548C202.366 15.7548 201.414 15.9794 200.558 16.4285C199.724 16.8777 198.986 17.4873 198.344 18.2573L196.676 16.6531C197.553 15.712 198.537 14.9848 199.628 14.4714C200.74 13.9581 202.002 13.7014 203.414 13.7014C204.825 13.7014 206.055 13.9688 207.103 14.5035C208.173 15.0168 208.996 15.7441 209.574 16.6852C210.173 17.6263 210.472 18.7386 210.472 20.0219V30H208.194V27.7862C207.552 28.6418 206.708 29.3155 205.66 29.8075C204.611 30.2781 203.446 30.5133 202.162 30.5133ZM202.451 28.5241C203.777 28.5241 204.954 28.214 205.98 27.5937C207.007 26.952 207.734 26.0965 208.162 25.027V22.2036H203.606C202.173 22.2036 200.975 22.471 200.013 23.0057C199.072 23.5191 198.601 24.3319 198.601 25.4441C198.601 26.3852 198.954 27.1338 199.66 27.69C200.366 28.2461 201.296 28.5241 202.451 28.5241ZM227.085 25.8933L228.786 27.4654C228.058 28.4065 227.139 29.1551 226.026 29.7112C224.936 30.246 223.695 30.5133 222.305 30.5133C220.701 30.5133 219.267 30.1497 218.006 29.4225C216.765 28.6953 215.781 27.7007 215.054 26.4387C214.348 25.1767 213.995 23.733 213.995 22.1074C213.995 20.4818 214.348 19.038 215.054 17.776C215.781 16.5141 216.776 15.5195 218.038 14.7922C219.3 14.065 220.733 13.7014 222.337 13.7014C223.727 13.7014 224.968 13.9795 226.059 14.5356C227.149 15.0703 228.058 15.8082 228.786 16.7494L227.085 18.3215C226.572 17.5515 225.93 16.9419 225.16 16.4927C224.39 16.0221 223.449 15.7868 222.337 15.7868C221.182 15.7868 220.166 16.0542 219.289 16.5889C218.412 17.1237 217.727 17.8723 217.236 18.8348C216.744 19.7759 216.498 20.8668 216.498 22.1074C216.498 23.3479 216.744 24.4495 217.236 25.412C217.727 26.3531 218.412 27.0911 219.289 27.6258C220.166 28.1605 221.182 28.4279 222.337 28.4279C223.449 28.4279 224.39 28.2033 225.16 27.7541C225.93 27.2836 226.572 26.6633 227.085 25.8933ZM244.936 25.5083L246.605 27.0804C245.771 28.1498 244.765 28.9947 243.589 29.615C242.412 30.2139 241.065 30.5133 239.546 30.5133C237.878 30.5133 236.381 30.1497 235.055 29.4225C233.75 28.6953 232.723 27.7007 231.975 26.4387C231.226 25.1767 230.852 23.733 230.852 22.1074C230.852 20.4818 231.205 19.038 231.91 17.776C232.638 16.5141 233.632 15.5195 234.894 14.7922C236.156 14.065 237.589 13.7014 239.193 13.7014C240.733 13.7014 242.092 14.065 243.268 14.7922C244.466 15.4981 245.407 16.4713 246.091 17.7119C246.776 18.9525 247.118 20.3855 247.118 22.0111V22.9415H233.386C233.579 24.5885 234.231 25.9147 235.343 26.9199C236.477 27.9252 237.889 28.4279 239.578 28.4279C241.803 28.4279 243.589 27.4547 244.936 25.5083ZM239.193 15.7868C237.632 15.7868 236.327 16.2681 235.279 17.2306C234.252 18.1717 233.632 19.423 233.418 20.9844H244.616C244.423 19.423 243.824 18.1717 242.819 17.2306C241.814 16.2681 240.605 15.7868 239.193 15.7868Z"
        fill="black"
      />
      <g clipPath="url(#clip0_108_15)">
        <mask
          id="mask0_108_15"
          maskUnits="userSpaceOnUse"
          x={0}
          y={7}
          width={59}
          height={24}
          style={{ maskType: "luminance" }}
        >
          <path d="M58.5586 7H0V30.3H58.5586V7Z" fill="white" />
        </mask>
        <g mask="url(#mask0_108_15)">
          <path
            d="M58.5572 6.99994H55.3226C54.4253 6.99994 53.5864 7.45659 53.0827 8.22027L48.7566 14.7786C48.6415 14.9525 48.3918 14.9525 48.2763 14.7786L43.9506 8.22027C43.4476 7.45659 42.608 6.99994 41.7107 6.99994H38.4761L46.182 18.6825L38.5186 30.3H41.7532C42.6505 30.3 43.4894 29.8433 43.9931 29.0796L48.2763 22.5864C48.3918 22.4125 48.6415 22.4125 48.7566 22.5864L53.0398 29.0796C53.5428 29.8433 54.3828 30.3 55.2801 30.3H58.5147L50.8509 18.6825L58.5572 6.99994Z"
            fill="black"
          />
          <path
            d="M31.821 9.38328V30.3H33.367C34.6482 30.3 35.6864 29.2331 35.6864 27.9166V6.99994H34.1404C32.8592 6.99994 31.821 8.06676 31.821 9.38328Z"
            fill="black"
          />
          <path
            d="M28.9877 7.00003H27.6119C26.0972 7.00003 24.7848 8.07657 24.4492 9.59421L21.3714 23.4988L18.6777 10.5192C18.1793 8.12029 15.7843 6.50257 13.3335 7.19824C11.7725 7.64129 10.6151 8.99667 10.2776 10.6241L7.61116 23.4813L4.53915 9.59518C4.20254 8.07754 2.89015 7.00003 1.37541 7.00003H0.000610352L5.1566 30.2991H7.11005C8.8829 30.2991 10.4147 29.0253 10.7844 27.2434L14.0805 11.347C14.1211 11.1497 14.2932 11.0069 14.4889 11.0069C14.6847 11.0069 14.8568 11.1497 14.8974 11.347L18.1964 27.2444C18.5661 29.0263 20.0978 30.2991 21.8707 30.2991H23.8308L28.9877 7.00003Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_108_15">
          <rect
            width="58.8048"
            height="23.3"
            fill="white"
            transform="translate(0 7)"
          />
        </clipPath>
      </defs>
    </svg>
    <ul className="hidden md:flex">
      <li className="mx-3 px-2">
        All Services
        <i className="fa-solid fa-caret-down mx-1" />
      </li>
      <li>Get Hired</li>
    </ul>
  </div>
  <div className="flex md:hidden">
    <button className="text-black focus:outline-none">
    <FontAwesomeIcon icon={faBars} className="text-black" />
    </button>
  </div>
  <div className="hidden md:flex">
    <a href="#" className="bg-black text-white p-2 md:p-4">
      Discover Experts
    </a>
  </div>
</nav>

    </>
  )
}
