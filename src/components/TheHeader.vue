<template>
  <header class="header w-8/12 h-32 mx-auto bg-zinc-500 content-center p-10">
    <div class="flex items-center justify-items-end">
      <nav class="flex">
        <router-link
          class="pr-10 text-xl text-yellow-500"
          to="/"
        >
          Популярные Фильмы
        </router-link>
        <router-link
          class="pr-3 text-xl text-yellow-500"
          to="/favorites">
          Буду смотреть
        </router-link>
        <span class="pr-3 text-xl text-yellow-500">{{ favoriteCounter }}</span>
      </nav>
      <div class="flex ml-auto">
        <label for="search-film">
          <input
            type="search"
            class="relative m-0 block flex-auto rounded-xl border border-solid border-gray-400
              border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base
              font-normal leading-[1.6] text-surface outline-none transition duration-200
              ease-in-out placeholder-stone-500 placeholder:text-neutral-500 focus:z-[3]
              focus:border-primary focus:shadow-inset focus:outline-none
              motion-reduce:transition-none dark:border-white/10 dark:text-white
              dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill
              dark:focus:border-primary w-96 h-10 text-white"
            placeholder="Искать"
            aria-label="Search"
            id="search-film"
            aria-describedby="button-addon2"
          />
        </label>
        <span
          class="flex items-center whitespace-nowrap px-3 py-[0.25rem]
            text-white text-surface dark:border-neutral-400 dark:text-white
            [&>svg]:h-5 [&>svg]:w-5"
          id="button-addon2"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // ...
  computed: {
    // mix the getters into computed with object spread operator
    // ...mapGetters([
    //   'doneTodosCount',
    //   'anotherGetter',
    //   // ...
    // ])
    ...mapGetters({
        favoriteCounter: 'favoriteFilmsCounter'
    }),
  }

}
</script>
