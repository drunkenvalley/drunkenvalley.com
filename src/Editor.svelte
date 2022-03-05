<style>
    .editor-container {
        --shade: #05193733;
        --shadow: 0px 0px 160px 0px;
        -webkit-box-shadow: var(--shadow) var(--shade);
        -moz-box-shadow: var(--shadow) var(--shade);
        box-shadow: var(--shadow) var(--shade);
        border-radius: .5rem;
        border: 2px solid #051937;
        padding: 2rem;
        background: rgba(255,255,255,0.0125)
    }

    nav {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: end;
    }

    .save-btn {
        --shadow: 0px 0px 0px 0px;
        -webkit-box-shadow: var(--shadow) var(--shade);
        -moz-box-shadow: var(--shadow) var(--shade);
        box-shadow: var(--shadow) var(--shade);
        border-radius: .25rem;
        margin: .5rem;
        padding: 1rem;
        background: transparent;
        color: #051937;
        font-weight: bold;
        border: 2px solid #051937;
        transform: scale(1);
        transition: all 300ms ease-in-out;
    }
    .save-btn:hover, .save-btn:focus {
        --shadow: 0px 0px 20px 0px;
        -webkit-box-shadow: var(--shadow) var(--shade);
        -moz-box-shadow: var(--shadow) var(--shade);
        box-shadow: var(--shadow) var(--shade);
        transform: scale(1.05);
    }

    .save-btn:active, .save-btn:visited {
        background: #051937;
        color: white;
    }
</style>

<script lang="ts">
    import { fade } from 'svelte/transition'
    import EditorJS, { OutputBlockData, OutputData } from '@editorjs/editorjs'

    const editor = new EditorJS({
        holder: 'editor'
    })

    let saving: Promise<OutputData>

    const save: VoidFunction = async () => {
        saving = editor.save()
        const {
            blocks,
            time
        } : {
            blocks: OutputBlockData[],
            time?: number
        } = await saving

        console.log(blocks, time)
    }
</script>

<div class="editor-container">
    <div id="editor"></div>
    <nav>
        <button class="save-btn" on:click={save}>
            {#await saving}
                <div transition:fade="{{ duration: 300 }}" class="loading" />
            {/await}
            Save
        </button>
    </nav>
</div>