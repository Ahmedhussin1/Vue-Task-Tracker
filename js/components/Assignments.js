 export default {
   template: `
           <section v-show="inProgressAssignments.length">
            <h1 class="font-bold mb-2">in progress</h1>
            <ul>
                <li v-for="assignment in inProgressAssignments" :key="assignment.id">
                    <label>
                        {{assignment.name}}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>

        <section v-show="completedAssignments.length" class="mt-8">
            <h1 class="font-bold mb-2">completed</h1>
            <ul>
                <li v-for="assignment in completedAssignments" :key="assignment.id">
                    <label>
                        {{assignment.name}}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
    `,
   data() {
     return {
       assignments: [
         { name: "finish project", complete: false, id: 1 },
         { name: "read chapter 4", complete: false, id: 2 },
         { name: "turn in homework", complete: false, id: 3 },
       ],
     };
   },
   computed: {
     inProgressAssignments() {
       return this.assignments.filter((assignment) => !assignment.complete);
     },
     completedAssignments() {
       return this.assignments.filter((assignment) => assignment.complete);
     },
   },
 };