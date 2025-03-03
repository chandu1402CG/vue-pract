<template>
    <div>
        <p>Named slot</p>
        <slot name="namedSlot">
            
        </slot>
        <div>
            <p>Default slot</p>
            <slot>
            </slot>
        </div>
        <div>
            <ul>
                <li v-for="hobby in hobbies" :key="hobby">
                    <slot :item="hobby" name="scopedslots"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"WrapperSlot",
    data(){
        return {
            hobbies:['hobby','news','repo']
        }
    }
}
</script>