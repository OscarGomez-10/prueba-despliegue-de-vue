<template>
    <div class="row g-4 mb-4">
        <div class="col-md-6 col-lg-3">
            <div class="card card-custom h-100">
                <div class="card-body">
                    <h3 class="card-title h5"><i class="bi bi-person-running me-2"></i>Pausas Hoy</h3>
                    <div class="row text-center mt-3">
                        <div class="col-6">
                            <div class="h3 text-primary">5</div>
                            <div class="small opacity-75">Completadas</div>
                        </div>
                        <div class="col-6">
                            <div class="h3">2</div>
                            <div class="small opacity-75">Pendientes</div>
                        </div>
                    </div>
                    <div class="progress progress-custom mt-3">
                        <div class="progress-bar progress-fill-custom" style="width: 70%"></div>
                    </div>
                    <p class="small mt-2 mb-0">70% del objetivo diario</p>
                </div>
            </div>
        </div>

        <!-- Resto de las tarjetas del dashboard -->
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Los estilos ya están en el CSS global */
</style>