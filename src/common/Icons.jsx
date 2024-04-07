
export const Arrow = ({ id, open }) => {
    return (
        <div className="relative ">
            <svg className={`${id === open ? "rotate-180" : "rotate-0"}transition-transform`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99823 11.2439C8.10963 11.2422 8.2195 11.2177 8.321 11.1717C8.4225 11.1258 8.51347 11.0595 8.58823 10.9769L13.4132 6.03886C13.4829 5.97014 13.5378 5.88799 13.5748 5.79741C13.6117 5.70682 13.6299 5.60968 13.6282 5.51186C13.6293 5.41288 13.6107 5.31467 13.5735 5.22293C13.5363 5.13118 13.4813 5.04773 13.4116 4.97741C13.342 4.90709 13.259 4.8513 13.1676 4.81327C13.0763 4.77524 12.9782 4.75572 12.8792 4.75586C12.6762 4.75586 12.4792 4.83886 12.3332 4.98486L8.00423 9.43486L3.66323 4.98486C3.5178 4.84063 3.32203 4.75853 3.11723 4.75586C3.01816 4.75559 2.92002 4.77501 2.82851 4.81298C2.737 4.85095 2.65394 4.90672 2.58417 4.97705C2.51439 5.04739 2.45928 5.13088 2.42204 5.22269C2.3848 5.3145 2.36617 5.41279 2.36723 5.51186C2.36723 5.72186 2.44423 5.89886 2.58323 6.03886L7.41423 10.9769C7.58523 11.1549 7.77623 11.2439 7.99823 11.2439Z" fill="white" />
            </svg>
        </div>
    );
}
export const Herobg = () => {
    return (
        <svg className="w-full" width="1920" height="1440" viewBox="0 0 1440 1440" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_8013_38)">
                <ellipse opacity="0.3" cx="1227.67" cy="471.599" rx="522.328" ry="400.599" fill="#3840FF" />
                <ellipse cx="74.3277" cy="638.599" rx="522.328" ry="400.599" fill="#A661FF" />
                <ellipse cx="-26.783" cy="582.391" rx="406.576" ry="311.637" fill="black" />
                <ellipse cx="525.93" cy="575.842" rx="406.576" ry="311.637" fill="#EAAFFF" />
                <ellipse cx="174.336" cy="872.197" rx="370.404" ry="283.803" fill="#FFD873" />
                <ellipse cx="421.754" cy="755.402" rx="370.404" ry="283.803" fill="#FFD873" />
                <ellipse cx="1179.2" cy="607.497" rx="450.707" ry="345.475" fill="#8960FF" fill-opacity="0.94" />
                <ellipse cx="1380" cy="703" rx="299" ry="260" fill="#AF7EFF" fill-opacity="0.94" />
                <ellipse cx="18.0706" cy="607.497" rx="134.561" ry="69.3134" fill="#0029FF" />
                <ellipse cx="48" cy="574.5" rx="164" ry="102.5" fill="#711AFF" />
            </g>
            <defs>
                <filter id="filter0_f_8013_38" x="-731.591" y="-212.591" width="2765.18" height="1652.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="141.795" result="effect1_foregroundBlur_8013_38" />
                </filter>
            </defs>
        </svg>

    )
}