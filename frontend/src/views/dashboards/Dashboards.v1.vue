<script setup>
import {
    dashboardOne,
    dashboardTwo,
    splineAreaWidgetTwo,
    splineAreaWidgetThree,
} from '@/data/dashboard.v1.js'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

import { LMap, LGeoJson, LPolygon } from "@vue-leaflet/vue-leaflet";


</script>

<template>
    <div class="container mx-auto">
        <Breadcrumbs parentTitle="Главная панель"  />
        <div class="grid grid-cols-12 gap-5">
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i class="i-Add-User text-6xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Сотрудников</p>
                            <p class="text-xl text-primary">205</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i class="i-Flag text-6xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Длина всех ВЛ</p>
                            <p class="text-xl text-primary">24150 км</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i
                            class="i-Globe text-6xl text-purple-200"
                        ></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Требущие внимания ВЛ</p>
                            <p class="text-xl text-primary">500 км</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i class="i-Hand text-6xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-gray-400">В работе</p>
                            <p class="text-xl text-primary">200 км</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-8 md:col-span-6">
                <BaseCard>
                    <h4 class="card-title mb-4">Количество ЧС за квартал</h4>
                    <apexchart
                        type="bar"
                        height="255"
                        :options="dashboardOne.chartOptions"
                        :series="dashboardOne.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-4 md:col-span-6">
                <BaseCard>
                    <h4 class="card-title mb-4">Типы ЧС за квартал</h4>
                    <apexchart
                        type="pie"
                        height="290"
                        :options="dashboardTwo.chartOptions"
                        :series="dashboardTwo.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div
                class="col-span-12 xl:col-span-6 lg:col-span-6
                "
            >
                <BaseCard noPadding class="overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9180.165612855031!2d55.77648791102235!3d37.54039597535095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d781c7c2651facc!2zMzfCsDMyJzI1LjMiTiA1NcKwNDYnNDIuOCJF!5e1!3m2!1sru!2sru!4v1638556132334!5m2!1sru!2sru" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </BaseCard>
            </div>

            <div class="col-span-12 xl:col-span-6 lg:col-span-6">
                <BaseCard>
                    <div class="card-title mb-4">Очередь на обслуживания</div>

                    <div class="flex flex-col items-center mb-4 md:flex-row">
                        <img
                            class="avatar-md mr-2 rounded w-20 h-20"
                            src="/images/products/headphone-4.jpg"
                            alt=""
                        />
                        <div class="flex-grow text-center md:text-left">
                            <h5>
                                <router-link
                                    to=""
                                    class="text-gray-800 hover:text-primary"
                                >
                                    Участок № 135
                                </router-link>
                            </h5>
                            <p class="text-gray-400 text-xs mb-3 md:mb-0">
                                Требуется выезд бригады для обслуживания
                            </p>
                            <div
                                class="
                                    flex
                                    justify-center
                                    mb-4
                                    md:justify-start md:mb-0
                                "
                            >
                                <p class="text-primary text-sm mr-2">28.11.2024</p>
                               
                            </div>
                        </div>
                        <BaseBtn
                            sm
                            class="
                                border border-primary
                                text-primary
                                rounded-full
                                hover:bg-primary hover:text-white
                            "
                            >Подробнее</BaseBtn
                        >
                    </div>
                    <div class="flex flex-col items-center mb-4 md:flex-row">
                        <img
                            class="avatar-md mr-2 rounded w-20 h-20"
                            src="/images/products/headphone-4.jpg"
                            alt=""
                        />
                        <div class="flex-grow text-center md:text-left">
                            <h5>
                                <router-link
                                    to=""
                                    class="text-gray-800 hover:text-primary"
                                >
                                    Участок № 127
                                </router-link>
                            </h5>
                            <p class="text-gray-400 text-xs mb-3 md:mb-0">
                               Требуется выезд бригады для обслуживания
                            </p>
                            <div
                                class="
                                    flex
                                    justify-center
                                    mb-4
                                    md:justify-start md:mb-0
                                "
                            >
                                <p class="text-primary text-sm mr-2">18.11.2022</p>
                               
                            </div>
                        </div>
                        <BaseBtn
                            sm
                            class="
                                border border-primary
                                text-primary
                                rounded-full
                                hover:bg-primary hover:text-white
                            "
                            >Подробнее</BaseBtn
                        >
                    </div>
                    <div class="flex flex-col items-center mb-4 md:flex-row">
                        <img
                            class="avatar-md mr-2 rounded w-20 h-20"
                            src="/images/products/headphone-4.jpg"
                            alt=""
                        />
                        <div class="flex-grow text-center md:text-left">
                            <h5>
                                <router-link
                                    to=""
                                    class="text-gray-800 hover:text-primary"
                                >
                                    Участок № 435
                                </router-link>
                            </h5>
                            <p class="text-gray-400 text-xs mb-3 md:mb-0">
                                Требуется выезд бригады для обслуживания
                            </p>
                            <div
                                class="
                                    flex
                                    justify-center
                                    mb-4
                                    md:justify-start md:mb-0
                                "
                            >
                                <p class="text-primary text-sm mr-2">28.12.2023</p>
                                
                            </div>
                        </div>
                        <BaseBtn
                            sm
                            class="
                                border border-primary
                                text-primary
                                rounded-full
                                hover:bg-primary hover:text-white
                            "
                            >Подробнее</BaseBtn
                        >
                    </div>
                </BaseCard>
            </div>
            
            
            <div class="col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title py-3">Проведенные работы</div>
                        </div>
                    </template>
                    <div
                        class="
                            block
                            w-full
                            overflow-x-auto
                            whitespace-nowrap
                            borderless
                            hover
                        "
                    >
                        <div
                            class="
                                dataTable-wrapper dataTable-loading
                                no-footer
                                fixed-columns
                            "
                        >
                            <div
                                class="
                                    dataTable-container
                                    block
                                    w-full
                                    overflow-x-auto
                                    whitespace-nowrap
                                    borderless
                                    hover
                                "
                            >
                                <table
                                    class="
                                        table-3
                                        dataTable-table
                                        max-w-full
                                        w-full
                                    "
                                >
                                    <thead>
                                        <tr class="">
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Номер бригады
                                            </th>
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Имя инжинера
                                            </th>
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Состав бригады
                                            </th>
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Статус
                                            </th>
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Результаты 
                                            </th>
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Дата
                                            </th>
                                            <th
                                                class="
                                                    text-left
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Действие
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            class="
                                                hover:bg-gray-100
                                                cursor-pointer
                                            "
                                            v-for="(n, index) in 8"
                                            :key="index"
                                        >
                                            <td class="text-xs py-5 px-4">
                                                {{ index + 1 }}
                                            </td>

                                            <td class="text-xs">
                                                Астахов Николай И. {{ index + 1 }}
                                            </td>
                                            <td class="py-5">
                                                <div class="flex">
                                                    <img
                                                        class="
                                                            w-9
                                                            h-9
                                                            rounded-full
                                                            mr-2
                                                        "
                                                        src="/images/products/speaker-1.jpg"
                                                        alt=""
                                                    />
                                                    <img
                                                        class="
                                                            w-9
                                                            h-9
                                                            rounded-full
                                                            mr-2
                                                        "
                                                        src="/images/products/headphone-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </td>
                                            <td class="py-5">
                                                <span
                                                    class="
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        text-primary
                                                        border border-primary
                                                        mr-3
                                                        text-xs
                                                    "
                                                    >Delivered</span
                                                >
                                            </td>
                                            <td class="py-5">
                                                {{ 3.34 * index + 1 }}%
                                            </td>
                                            <td class="py-5">12-02-20</td>
                                            <td class="py-5">
                                                <BaseBtn
                                                    rounded
                                                    class="
                                                        border border-primary
                                                        text-primary
                                                        hover:bg-primary
                                                        hover:text-white
                                                    "
                                                >
                                                    Подробнее
                                                </BaseBtn>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="dataTable-bottom">
                                <div class="dataTable-info">
                                    8 из 8 работ
                                </div>
                                <nav class="dataTable-pagination">
                                    <ul class="dataTable-pagination-list"></ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>
