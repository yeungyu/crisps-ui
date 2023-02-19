<script lang="ts">
  import { onMount } from 'svelte';
  import Editor from '@crisps-ui/editor-core';

  onMount(() => {
    const doc = document.querySelector('#content');
    const mountDOM = document.querySelector('#editor');
    new Editor({ doc, mountDOM });
  });
</script>

<main>
  <div id="editor" />

  <div id="content" style="display: none">
    <p>
      This is your dinosaur-enabled editor. The insert menu allows you to insert
      dinosaurs.
    </p>
    <p>
      This paragraph
      <img class="dinosaur" dino-type="stegosaurus" alt="" />
      , for example,
      <img class="dinosaur" dino-type="triceratops" alt="" />
      is full
      <img class="dinosaur" dino-type="tyrannosaurus" alt="" />
      of dinosaurs.
    </p>
    <p>Dinosaur nodes can be selected, copied, pasted, dragged, and so on.</p>
  </div>
</main>

<style>
  /* @import './style/editor.css'; */

  :global(img.dinosaur) {
    height: 40px;
    vertical-align: bottom;
    border: 1px solid #0ae;
    border-radius: 4px;
    background: #ddf6ff;
    display: inline-block;
  }
</style>
