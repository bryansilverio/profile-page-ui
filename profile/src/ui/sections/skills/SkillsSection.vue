<template>
    <section class="colorlib-skills" data-section="skills" id="skills">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 class="colorlib-heading animate-box">{{ $t('sections.skills') }}</h2>
                    <div v-for="(v,i) in skills" :key="i" style="display: inline-block;padding: 0.375rem 0.75rem;white-space: nowrap;vertical-align: middle;">
						<h1>
							<span class="badge" style="font-size: 50%; font-weight: 500;line-height: 1">
								<i :class="v.icon+' colored'"></i> {{v.name}}
							</span>
						</h1>
					</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./skillsSection.js"></script>
<style src="./skillsSection.css"></style>