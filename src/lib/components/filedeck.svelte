<script>
  import Filetable from "./Filetable.svelte";
  import UploadRow from "./Upload.svelte";
  import { getStorage, ref, getMetadata, listAll } from "firebase/storage";
  import { onMount } from "svelte";

  const storage = getStorage();
  const refs = ["fbFiles"];
  $: files = {
    fbFiles: [],
  };

  function getFileData() {
    files = {
      fbFiles: [],
    };
    const user = localStorage.getItem("uid");
    refs.forEach((folder) => {
      let reference = ref(storage, `${user}/${folder}`);
      listAll(reference)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getMetadata(itemRef).then((metaData) => {
              files[folder] = [...files[folder], metaData];
            });
          });
        })
        .catch((error) => {});
    });
  }

  onMount(() => {
    let user = "";
    getFileData();
  });
</script>

        <div class = header> Welcome to your files </div>      
        <UploadRow folder="fbFiles" functionProp={() => getFileData()} />
        {#if files.fbFiles.length > 0}
          <Filetable
            data={files.fbFiles}
            folder="fbFiles"
            functionProp={() => getFileData()}
          />
        {/if}
 

<style>
.header{
  color:white;
  font-weight:400;
  font-size:2.5rem;
  padding-top:50px;
  
}
  
</style>
