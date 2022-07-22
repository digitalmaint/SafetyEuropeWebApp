$("#sidebar-menu").html(" <ul class=\"menu\">\n" +
    "                    <li class=\"sidebar-title\">Menu</li>\n" +
    "\n" +
    "                    <li class=\"sidebar-item  has-sub\">\n" +
    "                        <a href=\"\" class='sidebar-link'>\n" +
    "                            <i class=\"bi bi-stack\"></i>\n" +
    "                            <span>Manutenzioni Preventive</span>\n" +
    "                        </a>\n" +
    "                        <ul class=\"submenu \">\n" +
    "                            <li class=\"submenu-item \">\n" +
    "                                <a href=\"dashboard.html\">Manutenzioni</a>\n" +
    "                            </li>\n" +
    "                            <li class=\"submenu-item \">\n" +
    "                                <a href=\"component-badge.html\">Rapportini</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"sidebar-item  \">\n" +
    "                        <a onclick=\"localStorage.removeItem('auth_token');location.reload();\" class='sidebar-link'>\n" +
    "                            <i class=\"bi bi-door-closed-fill\"></i>\n" +
    "                            <span>Log Out</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>");
