<script>
  import {
    getStorage,
    ref,
    getDownloadURL,
    deleteObject,
  } from "firebase/storage";

  function bytesToSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  }

  const storage = getStorage();

  function downloadFile(folder, name) {
    const uid = localStorage.getItem("uid");
    let path = `${uid}/${folder}/${name}`;
    getDownloadURL(ref(storage, path))
      .then((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.click();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function deleteFile(folder, name) {
    const uid = localStorage.getItem("uid");
    let path = `${uid}/${folder}/${name}`;
    const fileRef = ref(storage, path);

    // Delete the file
    window.confirm("Permanently delete this file?");
    deleteObject(fileRef)
      .then(() => {
        functionProp();
      })
      .catch((error) => {
      });
  }

  export let data;
  export let folder;
  export let functionProp = () => {};
</script>

<div class = table > 
    {#each data as { name, timeCreated, size }}
    <hr>
      <div>

        <div class="title">{name}</div>
        

        <div class = info > 
        <div class = bytes >date: {timeCreated.substring(0, 10)}</div>
        <div class = bytes >size: {bytesToSize(size)}</div>
      </div>

      
        <div>
          <button
            class="btn btn-primary"
            on:click={() => downloadFile(folder, name)}>Download</button
          >
          <button
            class="btn btn-danger"
            on:click={() => deleteFile(folder, name)}>Delete</button
          >
        </div>
      </div>
    {/each}

  </div>

<style>
    .table{
    margin-top: 20px;
    background-color: rgb(31, 48, 100);
    padding:10px;
    color:rgb(255, 253, 253);
    border-radius: 10px;
  padding: 1rem;
  font-weight: 500;
  
  }
  .title{
    color:white;
    font-size:1.5rem;
  }
  .button
  {
    background-color:black;
  }
  



 .info
 {
  color:rgb(255, 253, 253);
  background-color: transparent;
  border-radius: 10px;
  padding: .5rem;
  display: flex;
  font-weight: 500;
  font-size:1rem;
  justify-content: space-evenly;
  align-items: center;

 }
  
</style>
