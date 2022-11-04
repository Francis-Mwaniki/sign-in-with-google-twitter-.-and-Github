<template>
  <div class="">
    <!-- component -->
    <div class="overflow-x-auto">
      <div
        class="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
      >
        <div class="w-full lg:w-5/6">
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-slate-900 text-gray-200 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">First Name</th>
                  <th class="py-3 px-6 text-left">User</th>
                  <th class="py-3 px-6 text-center">University</th>
                  <th class="py-3 px-6 text-center">Age</th>
                  <th class="py-3 px-6 text-center">weight</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light" v-for="user in users[0]">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="mr-2">
                        <span
                          class="font-medium rounded-full border border-emerald-500 bg-black text-white"
                          >{{ user.id }}</span
                        >
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                          style="fill: #000000"
                        >
                          <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                          ></path>
                          <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg>
                      </div>
                      <span class="font-medium">{{ user.firstName }}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <div class="mr-2">
                        <img class="w-6 h-6 rounded-full" :src="user.image" />
                      </div>
                      <span>{{ user.lastName }}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <strong>{{ user.university }}</strong>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"
                      >{{ user.age }}</span
                    >
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        {{ user.weight }}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getAllUser() {
      let url = "https://dummyjson.com/users?limit=50";
      let res = await fetch(url);
      let data = await res.json(res);
      let finalData = data.users;
      console.log(this.users);
      this.users.push(finalData);
      console.log(this.users);
    },
  },
  mounted() {
    this.getAllUser();
  },
};
</script>
