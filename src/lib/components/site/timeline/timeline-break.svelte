<script lang="ts">
	export let date: string;
</script>

<div class="relative">
	<div class="absolute inset-0 flex items-center">
		<span class="w-full border-t" />
	</div>
	<div class="relative flex justify-center text-xs uppercase">
		<span class="bg-card px-2 text-muted-foreground">
			{date}
		</span>
	</div>
</div>
