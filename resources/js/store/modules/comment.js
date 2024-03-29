import axios from "axios";

export default {
    //สร้างตัวแปรนั่นแหละ
    state() {
        return {
            comment: null,
        };
    },
    getters: {
        comment(state) {
            return state.comment;
        },
    },
    mutations: {
        setComment(state, payload) {
            state.comment = payload;
        },
    },
    actions: {
        async storeForward({ dispatch }, payload) {
            //async มาคู่กับ await เสมอ | dispatch เป็นการรับข้อมูลจาก function จาก .vue ในที่นี้รับจาก Login.vue
            //console.log(payload);
            try {
                // await axios.get("/sanctum/csrf-cookie"); //await การ process ข้อมูลโดยบังคับให้ต้องรอ กระบวนการนี้เสร็จก่อนจึงจะสามารถไปทำ process อื่นๆได้

                await axios
                    .post("/api/forward", payload) //ไปที่ routes->api->login
                    .then((response) => {
                        return dispatch("getComm", response.data.ref_id);
                    })
                    .catch((err) => {
                        throw err.response;
                    });
            } catch (e) {
                throw e;
            }
        },

        async storeComplete({ dispatch }, payload) {
            //async มาคู่กับ await เสมอ | dispatch เป็นการรับข้อมูลจาก function จาก .vue ในที่นี้รับจาก Login.vue
            //console.log(payload);
            try {
                // await axios.get("/sanctum/csrf-cookie"); //await การ process ข้อมูลโดยบังคับให้ต้องรอ กระบวนการนี้เสร็จก่อนจึงจะสามารถไปทำ process อื่นๆได้

                await axios
                    .post("/api/complete", payload) //ไปที่ routes->api->login
                    .then((response) => {
                        return dispatch("getComm", response.data.ref_id);
                    })
                    .catch((err) => {
                        throw err.response;
                    });
            } catch (e) {
                throw e;
            }
        },
    },
};
