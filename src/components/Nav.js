export default function Nav(props) {
  const setActivePage = props.setActivePage;
  const activePage = props.activePage;
  const changePage = (pageName) => {
    setActivePage(pageName);
  };
  return (
    <nav class="border-gray-200 pt-5">
      <div class="flex flex-wrap justify-between mx-auto">
        <div class="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/logo2023.png"}
            class="lg:h-40"
            alt="Tricia-Nghiem-Logo"
            onClick={() => changePage("about-me")}
          />
        </div>
        <div
          class="w-full md:block md:w-auto sm:block sm:w-auto"
          id="navbar-default"
        >
          <ul class=" flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <button
                class={
                  activePage === "about-me"
                    ? "block py-2 pr-4 pl-3 text-neutral-500 rounded md:bg-transparent md:text-neutral-500 md:p-0 dark:text-neutral-500 text-sm"
                    : "block py-2 pr-4 pl-3 text-gray rounded md:bg-transparent md:text-gray md:p-0 dark:text-gray text-sm"
                }
                aria-current="page"
                onClick={() => changePage("about-me")}
              >
                home
              </button>
            </li>
            <li>
              <button
                class={
                  activePage === "portfolio"
                    ? "block py-2 pr-4 pl-3 text-neutral-500 md:bg-transparent md:text-neutral-500 md:p-0 dark:text-neutral-500 text-sm"
                    : "block py-2 pr-4 pl-3 text-gray md:bg-transparent md:text-gray md:p-0 dark:text-gray text-sm"
                }
                onClick={() => changePage("portfolio")}
              >
                portfolio
              </button>
            </li>
            <li>
              <button
                class={
                  activePage === "resume"
                    ? "block py-2 pr-4 pl-3 text-neutral-500 rounded md:bg-transparent md:text-neutral-500 md:p-0 dark:text-neutral-500 text-sm"
                    : "block py-2 pr-4 pl-3 text-gray rounded md:bg-transparent md:text-gray md:p-0 dark:text-gray text-sm"
                }
                onClick={() => changePage("resume")}
              >
                resume
              </button>
            </li>
            <li>
              <button>
                <a href="mailto: tricianghiem@gmail.com">contact</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
