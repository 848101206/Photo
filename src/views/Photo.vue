<template>
  <div>
    <!-- 展示相关 -->
    <div class="container">
      <div class="photoHeader">
        <div class="imgContainer">
          <img class="photoName" src="public/img/1.jpg" />
        </div>
        <div class="btnContainer">
          <span class="photoTitle">相册名称</span>
          <button class="mybtn" @click="showUploadView = true">上传照片</button>
        </div>
      </div>

      <div class="photoContainer">
        <template v-for="photo in photos">
          <router-link
            :to="{ name: 'Details', params: { id: photo.id, photo } }"
            :key="photo.id"
          >
            <div class="photoItem">
              <img :src="photo.imgUrl" />
              <span>
                {{ photo.name }}
              </span>
            </div>
          </router-link>
        </template>
      </div>
    </div>
    <!-- 上传相关 -->
    <UploadView
      :visible.sync="showUploadView"
      @upload-completed="handleUploadCompleted"
    ></UploadView>
  </div>
</template>

<script>
import UploadView from "../components/UploadView";
import { apiGetPhotos } from "../api";
export default {
  components: {
    UploadView,
  },
  data() {
    return {
      showUploadView: false,
      photos: [],
    };
  },

  // 写好代码的第二个点
  // 就是不可以有重复
  created() {
    this.updatePhotos();
  },
  methods: {
    async updatePhotos() {
      const { data } = await apiGetPhotos();
      this.photos = data.data.photos;
    },

    handleUploadCompleted() {
      this.updatePhotos();
    },
  },
};
</script>

<style></style>
