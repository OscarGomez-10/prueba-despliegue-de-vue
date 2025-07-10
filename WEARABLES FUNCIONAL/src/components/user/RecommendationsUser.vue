<template>
    <div>
        <div class="card recommendation-card mb-4 border-0">
            <div class="card-body text-center">
                <h2 class="h4"><i class="bi bi-exclamation-triangle-fill me-2"></i>Pausa Activa Recomendada</h2>
                <p class="mb-3">Has estado sentado por más de 2 horas. Tu ritmo cardíaco indica sedentarismo.</p>
                <h3 class="h5 mb-3">Ejercicios de Estiramiento - 5 minutos</h3>
                <button class="btn btn-primary" @click="startBreak">Iniciar Pausa Activa</button>
            </div>
        </div>

        <!-- Resto del contenido de recomendaciones -->
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Los estilos ya están en el CSS global */
</style>