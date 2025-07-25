<script src="./profile-index-page.js"></script>
<template>
    <div>
        <main class="wrapper">
            <ProfileHomeSection />
            <ProfileAboutSection />
            <ProfileSkillsSection />
            <ProfileExperienceSection />
            <ProfileProjectsSection />
            <ProfileContactSection :socialNetworkType="'EMAIL'"/>
        </main>
        <footer>
            <ProfileFooterSection />
        </footer>
    </div>
</template>