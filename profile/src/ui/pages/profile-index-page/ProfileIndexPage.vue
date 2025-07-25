<script src="./profile-index-page.js"></script>
<template>
    <div>
        <main class="wrapper">
            <ProfileHomeSection />
            <ProfileAboutSection />
            <ProfileSkillsSection v-show="false"/>
            <ProfileExperienceSection />
            <ProfileProjectsSection v-show="false"/>
            <ProfileContactSection/>
        </main>
        <footer>
            <ProfileFooterSection />
        </footer>
    </div>
</template>