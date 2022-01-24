<script lang="ts">
  interface Item {
    name: string
    url: string
  }

  export let items: Item[] = []
</script>

<div class="text-xs fixed sm:text-base bottom-4 right-4 text-right z-10">
  {#each items as { name, url }}
    <a href={url} class="p-1 bg-gray-200 mx-1 rounded" target="_blank" rel="noreferrer">{name}</a>
  {/each}
</div>
