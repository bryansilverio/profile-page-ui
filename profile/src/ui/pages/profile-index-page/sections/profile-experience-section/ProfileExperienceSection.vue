<script src="./profile-experience-section.js"></script>
<template>
	<section id="experience" class="my-5 py-5 bg-text" data-text="02">
		<div class="top-header">
            <h1>{{$t("sections.experience")}}</h1>
          </div>
		<div class="row" v-for="(v,i) in experiences" :key="i" style="margin-bottom: 5px;">
			<div class="col">
                <div class="about-info">
                    <h3 style="color: black;">{{v.company}}: {{v.position}}</h3>
                    <p>{{v.content}}</p>
					<img :src="v.logo" alt=""/>
                </div>
            </div>
		</div>
	</section>
</template>