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
			<div class="col">
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div class="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>Vue</span>
                        <span>React</span>
                        <span>Angular</span>
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div class="skills-list">
                        <span>PHP</span>
                        <span>JAVA</span>
                        <span>Python</span>
                        <span>C++</span>
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div class="skills-list">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>
		</div>
	</section>
</template>