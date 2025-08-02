"use client";

import Image from "next/image";
import { svgPaths } from "@/lib/svg-paths";
import IntegrationDiagram from "./IntegrationDiagram";

// SkyBackground component with purple gradient
function SkyBackground() {
  return (
    <div
      className="absolute h-[770px] left-0 top-0 w-[1440px]"
      data-name="Sky Background"
    >
      <div
        className="absolute h-[414.207px] left-1/2 top-[-210px] translate-x-[-50%] w-[728px]"
        data-name="Gradient"
      >
        <div className="absolute bottom-[-120.71%] left-[-68.68%] right-[-68.68%] top-[-120.71%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 1728 1415"
          >
            <g filter="url(#filter0_f_1_1666)" id="Gradient">
              <ellipse
                cx="864"
                cy="707.104"
                fill="#5024FF"
                rx="364"
                ry="207.104"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1414.21"
                id="filter0_f_1_1666"
                width="1728"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_1666"
                  stdDeviation="250"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// LogoFlowmate component
function LogoFlowmate() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Logo Flowmate"
    >
      <Image
        src="/images/flowmateLogo.svg"
        alt="FlowMate"
        width={36}
        height={36}
        className="w-9 h-9"
      />
      <div className="font-interTight font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap tracking-[-0.48px]">
        <p className="block leading-[1.5] whitespace-pre">
          Flowmate
        </p>
      </div>
    </div>
  );
}

// Button components
function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-6 py-2 relative rounded-[10px] shrink-0 w-[130px]"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#c1c7d0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)]"
      />
      <div className="font-interTight font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.55] whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#F8FAFB] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-6 py-2 relative rounded-[10px] shrink-0 w-[130px]"
      data-name="Button"
    >
      <div className="font-interTight font-semibold font-[16px] leading-[0] not-italic relative shrink-0 text-[#0D0D12] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.55] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="cta"
    >
      <Button />
      <Button1 />
    </div>
  );
}

// NavLink component
function NavLink() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row font-interTight gap-5 items-center justify-start leading-[0] left-1/2 not-italic p-0 text-[#ffffff] text-[16px] text-left text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="nav link"
    >
      <div className="relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          About Us
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          Features
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          Integrations
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          Pricing
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Blog</p>
      </div>
    </div>
  );
}

// Navbar component
function Navbar() {
  return (
    <div
      className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-row items-center justify-between pl-6 pr-2 py-2 relative rounded-xl shrink-0 w-[1240px]"
      data-name="Navbar"
    >
      <LogoFlowmate />
      <NavLink />
      <Cta />
    </div>
  );
}

// Avatar components
function AvatarsPeople() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatars People">
      <Image
        src="/images/avatars/avatar1.svg"
        alt="Avatar 1"
        width={24}
        height={24}
        className="rounded-full"
      />
    </div>
  );
}

function AvatarsPeople1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatars People">
      <Image
        src="/images/avatars/avatar2.svg"
        alt="Avatar 2"
        width={24}
        height={24}
        className="rounded-full"
      />
    </div>
  );
}

function AvatarsPeople2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatars People">
      <Image
        src="/images/avatars/avatar3.svg"
        alt="Avatar 3"
        width={24}
        height={24}
        className="rounded-full"
      />
    </div>
  );
}

function Avatars() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center mr-[-6px] p-0 relative rounded-[1000px] shrink-0"
      data-name="Avatars"
    >
      <AvatarsPeople />
    </div>
  );
}

function Avatars1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center mr-[-6px] p-0 relative rounded-[1000px] shrink-0"
      data-name="Avatars"
    >
      <AvatarsPeople1 />
    </div>
  );
}

function Avatars2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center mr-[-6px] p-0 relative rounded-[1000px] shrink-0"
      data-name="Avatars"
    >
      <AvatarsPeople2 />
    </div>
  );
}

function Avatars3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-1.5 py-0 relative shrink-0"
      data-name="avatars"
    >
      <Avatars />
      <Avatars1 />
      <Avatars2 />
    </div>
  );
}

// Arrow Right component
function OutlineArrowsArrowRight() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Outline / Arrows / Arrow Right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Outline / Arrows / Arrow Right">
          <path
            clipRule="evenodd"
            d={svgPaths.p2f7e0e80}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            fillRule="evenodd"
            id="Vector (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

// Badge component
function Badge() {
  return (
    <div
      className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-row gap-3 items-center justify-center px-3 py-2 relative rounded-xl shrink-0"
      data-name="badge"
    >
      <Avatars3 />
      <div className="font-interTight leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[1.55] whitespace-pre">
          17,000 people have been helped
        </p>
      </div>
      <OutlineArrowsArrowRight />
    </div>
  );
}

// Text component with gradient title
function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="text"
    >
      <Badge />
      <div
        className="bg-clip-text bg-gradient-to-b capitalize font-interTight font-medium from-[#ffffff] leading-[1.2] not-italic relative shrink-0 text-[64px] text-center text-nowrap to-[#ffffff66] whitespace-pre"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        <p className="block mb-0">{`Automation you can build, `}</p>
        <p className="block">adapt, and grow</p>
      </div>
      <div className="font-interTight leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center w-[678px]">
        <p className="block leading-[1.55]">
          Flowmate gives you the power to automate smarter — with scalable
          tools, intuitive workflows, and a platform built to evolve with your
          business.
        </p>
      </div>
    </div>
  );
}

// CTA Buttons
function Button2() {
  return (
    <div
      className="bg-[#5024ff] box-border content-stretch flex flex-row gap-2 h-[52px] items-center justify-center px-6 py-2 relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] shrink-0"
      data-name="Button"
    >
      <div className="font-interTight font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.55] whitespace-pre">Get started</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[52px] items-center justify-center px-6 py-2 relative rounded-[10px] shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#c1c7d0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)]"
      />
      <div className="font-interTight font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[1.55] whitespace-pre">Book a demo</p>
      </div>
    </div>
  );
}

function Cta1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="cta"
    >
      <Button2 />
      <Button3 />
    </div>
  );
}

// Top section (Text + CTA)
function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="top"
    >
      <Text />
      <Cta1 />
    </div>
  );
}


// Integration diagram container - New Design
function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <IntegrationDiagram />
    </div>
  );
}

// Content component
function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Top />
      <Container3 />
    </div>
  );
}

// Main Hero component
export default function Hero() {
  return (
    <div className="relative size-full" data-name="Hero">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[100px] items-center justify-start px-[100px] py-[30px] relative size-full">
          <SkyBackground />
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  );
}