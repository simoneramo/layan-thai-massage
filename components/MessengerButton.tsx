import { site } from "@/lib/site";

export default function MessengerButton() {
  return (
    <a
      href={site.messenger}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on Messenger"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-plum-700 text-white shadow-lg ring-1 ring-black/5 transition duration-200 ease-in-out hover:scale-105 hover:bg-plum-600 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-plum-300/50 dark:bg-plum-600 dark:hover:bg-plum-500 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          className="fill-current"
          d="M12 2C6.27 2 2 6.16 2 11.7c0 2.9 1.19 5.4 3.13 7.14.16.15.26.35.27.57l.05 1.77c.02.57.6.94 1.12.71l1.98-.87c.17-.08.37-.09.55-.04.9.25 1.86.38 2.83.38 5.73 0 10-4.16 10-9.7C22 6.16 17.73 2 12 2z"
        />
        <path
          className="fill-plum-700 dark:fill-plum-600"
          d="M5.96 14.54l2.94-4.66c.47-.74 1.47-.92 2.17-.4l2.34 1.75c.21.16.5.16.71 0l3.16-2.4c.42-.32.97.18.69.63l-2.94 4.66c-.47.74-1.47.92-2.17.4l-2.34-1.75a.59.59 0 0 0-.71 0l-3.16 2.4c-.42.32-.97-.18-.69-.63z"
        />
      </svg>
      <span className="pointer-events-none absolute right-[4.25rem] hidden whitespace-nowrap rounded-xl bg-plum-800 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-800 md:block">
        Message us
      </span>
    </a>
  );
}
