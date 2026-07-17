using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;
using System.Windows.Forms;

namespace UltraTechAdminRoster
{
    internal sealed class MainForm : Form
    {
        private readonly CookieContainer cookies = new CookieContainer();
        private readonly JavaScriptSerializer json = new JavaScriptSerializer();
        private readonly TextBox serverUrl = new TextBox { Text = "http://127.0.0.1:4180" };
        private readonly TextBox accessCode = new TextBox { UseSystemPasswordChar = true };
        private readonly TextBox deviceName = new TextBox { Text = Environment.MachineName };
        private readonly TextBox accountName = new TextBox();
        private readonly ComboBox accountRole = new ComboBox { DropDownStyle = ComboBoxStyle.DropDownList };
        private readonly NumericUpDown maxDevices = new NumericUpDown { Minimum = 1, Maximum = 32, Value = 3 };
        private readonly DataGridView accounts = new DataGridView();
        private readonly TextBox issuedCode = new TextBox { Multiline = true, ReadOnly = true, Height = 74, ScrollBars = ScrollBars.Vertical };
        private readonly Label status = new Label { AutoSize = false, Height = 38 };
        private readonly TextBox wikiSearch = new TextBox();
        private readonly ListBox wikiEntries = new ListBox();
        private readonly TextBox wikiId = new TextBox { ReadOnly = true };
        private readonly TextBox wikiTitle = new TextBox();
        private readonly TextBox wikiSummary = new TextBox { Multiline = true, Height = 70, ScrollBars = ScrollBars.Vertical };
        private readonly TextBox wikiContent = new TextBox { Multiline = true, ScrollBars = ScrollBars.Vertical, AcceptsReturn = true };
        private readonly TextBox wikiTags = new TextBox();
        private readonly TextBox syncOutput = new TextBox { Multiline = true, ReadOnly = true, ScrollBars = ScrollBars.Vertical };
        private readonly List<WikiRow> wikiRows = new List<WikiRow>();

        public MainForm()
        {
            Text = "UltraTech 管理名单工具";
            StartPosition = FormStartPosition.CenterScreen;
            MinimumSize = new Size(920, 650);
            Size = new Size(1120, 760);
            Font = new Font("Microsoft YaHei UI", 9F);
            BackColor = Color.FromArgb(16, 24, 32);
            ForeColor = Color.FromArgb(237, 246, 251);

            accountRole.Items.AddRange(new object[] { "游客", "管理员" });
            accountRole.SelectedIndex = 0;

            var root = new TableLayoutPanel
            {
                Dock = DockStyle.Fill,
                Padding = new Padding(18),
                ColumnCount = 1,
                RowCount = 5,
                BackColor = BackColor
            };
            root.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            root.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            root.RowStyles.Add(new RowStyle(SizeType.Percent, 100));
            root.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            root.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            Controls.Add(root);

            root.Controls.Add(BuildHeader(), 0, 0);
            root.Controls.Add(BuildConnectionPanel(), 0, 1);
            root.Controls.Add(BuildManagementTabs(), 0, 2);
            root.Controls.Add(BuildIssuePanel(), 0, 3);
            root.Controls.Add(status, 0, 4);

            ConfigureAccountGrid();
            SetStatus("尚未连接。请先输入管理员访问码并授权。", false);
        }

        private Control BuildHeader()
        {
            var panel = new FlowLayoutPanel { AutoSize = true, Dock = DockStyle.Fill, FlowDirection = FlowDirection.TopDown, Margin = new Padding(0, 0, 0, 12) };
            panel.Controls.Add(new Label { Text = "UltraTech 管理名单工具", Font = new Font("Microsoft YaHei UI", 20F, FontStyle.Bold), AutoSize = true });
            panel.Controls.Add(new Label
            {
                Text = "仅连接 UltraTech 管理服务。账号 ID 的 10 位数字用于识别；Unicode 标记仅作名单元数据，不能授予权限。",
                AutoSize = true,
                ForeColor = Color.FromArgb(167, 187, 201)
            });
            return panel;
        }

        private Control BuildConnectionPanel()
        {
            var group = CreateGroup("服务授权");
            var layout = CreateGrid(4);
            layout.Controls.Add(LabelFor("服务地址"), 0, 0);
            layout.Controls.Add(serverUrl, 1, 0);
            layout.SetColumnSpan(serverUrl, 3);
            layout.Controls.Add(LabelFor("管理员访问码"), 0, 1);
            layout.Controls.Add(accessCode, 1, 1);
            layout.SetColumnSpan(accessCode, 2);
            var login = PrimaryButton("授权并拉取名单");
            login.Click += async (sender, args) => await LoginAsync();
            layout.Controls.Add(login, 3, 1);
            layout.Controls.Add(LabelFor("本机名称"), 0, 2);
            layout.Controls.Add(deviceName, 1, 2);
            layout.SetColumnSpan(deviceName, 3);
            group.Controls.Add(layout);
            return group;
        }

        private Control BuildAccountPanel()
        {
            var split = new SplitContainer { Dock = DockStyle.Fill, SplitterDistance = 330, Margin = new Padding(0, 12, 0, 12) };
            var createGroup = CreateGroup("签发账号");
            var form = CreateGrid(2);
            form.Controls.Add(LabelFor("显示名称"), 0, 0);
            form.Controls.Add(accountName, 1, 0);
            form.Controls.Add(LabelFor("账号角色"), 0, 1);
            form.Controls.Add(accountRole, 1, 1);
            form.Controls.Add(LabelFor("设备上限"), 0, 2);
            form.Controls.Add(maxDevices, 1, 2);
            var create = PrimaryButton("创建并显示访问码");
            create.Click += async (sender, args) => await CreateAccountAsync();
            form.Controls.Add(create, 0, 3);
            form.SetColumnSpan(create, 2);
            createGroup.Controls.Add(form);
            split.Panel1.Controls.Add(createGroup);

            var listGroup = CreateGroup("所有账号");
            listGroup.Controls.Add(accounts);
            split.Panel2.Controls.Add(listGroup);
            return split;
        }

        private Control BuildManagementTabs()
        {
            var tabs = new TabControl { Dock = DockStyle.Fill, Margin = new Padding(0, 12, 0, 12) };
            tabs.TabPages.Add(new TabPage("账号授权") { BackColor = BackColor, ForeColor = ForeColor, Controls = { BuildAccountPanel() } });
            tabs.TabPages.Add(new TabPage("网页文案") { BackColor = BackColor, ForeColor = ForeColor, Controls = { BuildWikiPanel() } });
            tabs.TabPages.Add(new TabPage("GitHub 发布") { BackColor = BackColor, ForeColor = ForeColor, Controls = { BuildPublishPanel() } });
            return tabs;
        }

        private Control BuildWikiPanel()
        {
            var split = new SplitContainer { Dock = DockStyle.Fill, SplitterDistance = 330 };
            var listGroup = CreateGroup("工业档案与百科条目");
            var left = new TableLayoutPanel { Dock = DockStyle.Fill, ColumnCount = 1, RowCount = 2 };
            left.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            left.RowStyles.Add(new RowStyle(SizeType.Percent, 100));
            wikiSearch.TextChanged += (sender, args) => FilterWikiRows();
            wikiEntries.Dock = DockStyle.Fill;
            wikiEntries.BackColor = Color.FromArgb(11, 18, 24);
            wikiEntries.ForeColor = ForeColor;
            wikiEntries.SelectedIndexChanged += async (sender, args) => await LoadSelectedWikiPageAsync();
            left.Controls.Add(wikiSearch, 0, 0);
            left.Controls.Add(wikiEntries, 0, 1);
            listGroup.Controls.Add(left);
            split.Panel1.Controls.Add(listGroup);

            var editorGroup = CreateGroup("页面文案编辑");
            var editor = new TableLayoutPanel { Dock = DockStyle.Fill, ColumnCount = 1, RowCount = 10 };
            editor.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            editor.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            editor.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            editor.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            editor.RowStyles.Add(new RowStyle(SizeType.Percent, 100));
            editor.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            editor.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            wikiContent.Dock = DockStyle.Fill;
            editor.Controls.Add(LabelFor("注册名"), 0, 0);
            editor.Controls.Add(wikiId, 0, 1);
            editor.Controls.Add(LabelFor("中文名称"), 0, 2);
            editor.Controls.Add(wikiTitle, 0, 3);
            editor.Controls.Add(LabelFor("摘要"), 0, 4);
            editor.Controls.Add(wikiSummary, 0, 5);
            editor.Controls.Add(LabelFor("正文（Markdown）"), 0, 6);
            editor.Controls.Add(wikiContent, 0, 7);
            editor.Controls.Add(LabelFor("标签（逗号分隔）"), 0, 8);
            editor.Controls.Add(wikiTags, 0, 9);
            var save = PrimaryButton("保存页面文案");
            save.Click += async (sender, args) => await SaveWikiPageAsync();
            editor.Controls.Add(save, 0, 10);
            editorGroup.Controls.Add(editor);
            split.Panel2.Controls.Add(editorGroup);
            return split;
        }

        private Control BuildPublishPanel()
        {
            var group = CreateGroup("发布到 GitHub");
            var layout = new TableLayoutPanel { Dock = DockStyle.Fill, ColumnCount = 1, RowCount = 3 };
            layout.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            layout.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            layout.RowStyles.Add(new RowStyle(SizeType.Percent, 100));
            layout.Controls.Add(new Label
            {
                Text = "同步会导出百科编辑覆盖和公开规划文档，生成静态资料库，然后通过此电脑已配置的 Git 凭据提交并推送到 GitHub。",
                AutoSize = true,
                MaximumSize = new Size(760, 0),
                ForeColor = Color.FromArgb(167, 187, 201)
            }, 0, 0);
            var publish = PrimaryButton("导出并同步 GitHub");
            publish.Click += async (sender, args) => await PublishGitHubAsync();
            layout.Controls.Add(publish, 0, 1);
            syncOutput.Dock = DockStyle.Fill;
            syncOutput.BackColor = Color.FromArgb(11, 18, 24);
            syncOutput.ForeColor = Color.FromArgb(199, 233, 211);
            syncOutput.Text = "等待管理员发起同步。";
            layout.Controls.Add(syncOutput, 0, 2);
            group.Controls.Add(layout);
            return group;
        }

        private Control BuildIssuePanel()
        {
            var group = CreateGroup("本次签发的 100 位访问码");
            issuedCode.Dock = DockStyle.Fill;
            issuedCode.BackColor = Color.FromArgb(11, 18, 24);
            issuedCode.ForeColor = Color.FromArgb(245, 200, 103);
            group.Controls.Add(issuedCode);
            return group;
        }

        private void ConfigureAccountGrid()
        {
            accounts.Dock = DockStyle.Fill;
            accounts.BackgroundColor = Color.FromArgb(11, 18, 24);
            accounts.BorderStyle = BorderStyle.None;
            accounts.AutoGenerateColumns = false;
            accounts.ReadOnly = true;
            accounts.AllowUserToAddRows = false;
            accounts.AllowUserToDeleteRows = false;
            accounts.RowHeadersVisible = false;
            accounts.EnableHeadersVisualStyles = false;
            accounts.ColumnHeadersDefaultCellStyle.BackColor = Color.FromArgb(20, 33, 43);
            accounts.ColumnHeadersDefaultCellStyle.ForeColor = ForeColor;
            accounts.DefaultCellStyle.BackColor = Color.FromArgb(16, 24, 32);
            accounts.DefaultCellStyle.ForeColor = ForeColor;
            accounts.DefaultCellStyle.SelectionBackColor = Color.FromArgb(30, 57, 70);
            accounts.Columns.Add(new DataGridViewTextBoxColumn { HeaderText = "显示名称", DataPropertyName = "name", AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill });
            accounts.Columns.Add(new DataGridViewTextBoxColumn { HeaderText = "账号 ID", DataPropertyName = "id", Width = 120 });
            accounts.Columns.Add(new DataGridViewTextBoxColumn { HeaderText = "角色", DataPropertyName = "role", Width = 72 });
            accounts.Columns.Add(new DataGridViewTextBoxColumn { HeaderText = "设备", DataPropertyName = "devices", Width = 72 });
            accounts.Columns.Add(new DataGridViewTextBoxColumn { HeaderText = "状态", DataPropertyName = "status", Width = 72 });
        }

        private async System.Threading.Tasks.Task LoginAsync()
        {
            try
            {
                SetStatus("正在验证管理员访问码…", false);
                var result = await RequestAsync("POST", "/api/auth/redeem", new Dictionary<string, object>
                {
                    { "code", accessCode.Text.Trim() },
                    { "deviceLabel", deviceName.Text.Trim() }
                });
                var account = result["account"] as Dictionary<string, object>;
                if (account == null || Convert.ToString(account["role"]) != "admin") throw new InvalidOperationException("此访问码不是管理员账号。");
                accessCode.Text = "";
                await LoadAccountsAsync();
                await LoadWikiRowsAsync();
                SetStatus("管理员授权成功，名单已同步。", false);
            }
            catch (Exception error)
            {
                SetStatus(error.Message, true);
            }
        }

        private async System.Threading.Tasks.Task CreateAccountAsync()
        {
            try
            {
                if (string.IsNullOrWhiteSpace(accountName.Text)) throw new InvalidOperationException("请输入显示名称。");
                SetStatus("正在签发访问码…", false);
                var result = await RequestAsync("POST", "/api/admin/accounts", new Dictionary<string, object>
                {
                    { "displayName", accountName.Text.Trim() },
                    { "role", accountRole.SelectedIndex == 1 ? "admin" : "visitor" },
                    { "maxDevices", Convert.ToInt32(maxDevices.Value) }
                });
                issuedCode.Text = Convert.ToString(result["accessCode"]);
                Clipboard.SetText(issuedCode.Text);
                accountName.Text = "";
                await LoadAccountsAsync();
                SetStatus("账号已创建，访问码已复制到剪贴板。它只会返回一次。", false);
            }
            catch (Exception error)
            {
                SetStatus(error.Message, true);
            }
        }

        private async System.Threading.Tasks.Task LoadAccountsAsync()
        {
            var result = await RequestAsync("GET", "/api/admin/accounts", null);
            var values = result["accounts"] as object[];
            var rows = new List<AccountRow>();
            if (values != null)
            {
                foreach (var value in values)
                {
                    var account = value as Dictionary<string, object>;
                    if (account == null) continue;
                    rows.Add(new AccountRow
                    {
                        Name = Convert.ToString(account["displayName"]),
                        Id = Convert.ToString(account["id"]),
                        Role = Convert.ToString(account["role"]) == "admin" ? "管理员" : "游客",
                        Devices = string.Format("{0}/{1}", account["deviceCount"], account["maxDevices"]),
                        Status = Convert.ToBoolean(account["disabled"]) ? "已停用" : "有效"
                    });
                }
            }
            accounts.DataSource = rows;
        }

        private async System.Threading.Tasks.Task LoadWikiRowsAsync()
        {
            var result = await RequestAsync("GET", "/api/admin/wiki", null);
            var values = result["pages"] as object[];
            wikiRows.Clear();
            if (values != null)
            {
                foreach (var value in values)
                {
                    var page = value as Dictionary<string, object>;
                    if (page == null) continue;
                    wikiRows.Add(new WikiRow
                    {
                        Id = Convert.ToString(page["id"]),
                        Title = Convert.ToString(page["title"]),
                        Type = Convert.ToString(page["type"]),
                        Summary = Convert.ToString(page["summary"])
                    });
                }
            }
            FilterWikiRows();
        }

        private void FilterWikiRows()
        {
            var query = wikiSearch.Text.Trim().ToLowerInvariant();
            wikiEntries.BeginUpdate();
            wikiEntries.Items.Clear();
            foreach (var row in wikiRows)
            {
                var text = string.Format("{0} {1} {2}", row.Id, row.Title, row.Summary).ToLowerInvariant();
                if (query.Length == 0 || text.Contains(query)) wikiEntries.Items.Add(row);
            }
            wikiEntries.EndUpdate();
        }

        private async System.Threading.Tasks.Task LoadSelectedWikiPageAsync()
        {
            var row = wikiEntries.SelectedItem as WikiRow;
            if (row == null) return;
            try
            {
                var result = await RequestAsync("GET", "/api/admin/wiki/" + Uri.EscapeDataString(row.Id), null);
                var page = result["page"] as Dictionary<string, object>;
                if (page == null) return;
                wikiId.Text = Convert.ToString(page["id"]);
                wikiTitle.Text = Convert.ToString(page["title"]);
                wikiSummary.Text = Convert.ToString(page["summary"]);
                wikiContent.Text = Convert.ToString(page["content"]);
                var tags = page["tags"] as object[];
                wikiTags.Text = tags == null ? "" : string.Join(", ", Array.ConvertAll(tags, Convert.ToString));
            }
            catch (Exception error)
            {
                SetStatus(error.Message, true);
            }
        }

        private async System.Threading.Tasks.Task SaveWikiPageAsync()
        {
            try
            {
                if (string.IsNullOrWhiteSpace(wikiId.Text)) throw new InvalidOperationException("请先从左侧选择一个页面。");
                var rawTags = wikiTags.Text.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
                var tags = new List<string>();
                foreach (var tag in rawTags)
                {
                    var trimmed = tag.Trim();
                    if (trimmed.Length > 0) tags.Add(trimmed);
                }
                await RequestAsync("PUT", "/api/admin/wiki/" + Uri.EscapeDataString(wikiId.Text), new Dictionary<string, object>
                {
                    { "title", wikiTitle.Text.Trim() },
                    { "summary", wikiSummary.Text.Trim() },
                    { "content", wikiContent.Text.Trim() },
                    { "tags", tags.ToArray() }
                });
                await LoadWikiRowsAsync();
                SetStatus("页面文案已保存。本地游客页面刷新后即可看到。", false);
            }
            catch (Exception error)
            {
                SetStatus(error.Message, true);
            }
        }

        private async System.Threading.Tasks.Task PublishGitHubAsync()
        {
            try
            {
                syncOutput.Text = "正在导出编辑内容、生成资料库、提交并推送到 GitHub…";
                var result = await RequestAsync("POST", "/api/admin/sync/github", new Dictionary<string, object>());
                syncOutput.Text = string.Format("{0}\r\n{1}", Convert.ToString(result["output"]), Convert.ToString(result["warning"])).Trim();
                SetStatus("GitHub 同步任务已完成。", false);
            }
            catch (Exception error)
            {
                syncOutput.Text = "同步失败：" + error.Message;
                SetStatus(error.Message, true);
            }
        }

        private async System.Threading.Tasks.Task<Dictionary<string, object>> RequestAsync(string method, string path, Dictionary<string, object> body)
        {
            var baseUrl = serverUrl.Text.Trim().TrimEnd('/');
            Uri baseUri;
            if (!Uri.TryCreate(baseUrl, UriKind.Absolute, out baseUri)) throw new InvalidOperationException("服务地址无效。");
            var request = (HttpWebRequest)WebRequest.Create(new Uri(baseUri, path));
            request.Method = method;
            request.CookieContainer = cookies;
            request.Accept = "application/json";
            if (body != null)
            {
                var content = Encoding.UTF8.GetBytes(json.Serialize(body));
                request.ContentType = "application/json; charset=utf-8";
                request.ContentLength = content.Length;
                using (var stream = await request.GetRequestStreamAsync()) await stream.WriteAsync(content, 0, content.Length);
            }
            try
            {
                using (var response = (HttpWebResponse)await request.GetResponseAsync())
                using (var reader = new StreamReader(response.GetResponseStream(), Encoding.UTF8))
                {
                    return json.DeserializeObject(await reader.ReadToEndAsync()) as Dictionary<string, object>;
                }
            }
            catch (WebException error)
            {
                var response = error.Response as HttpWebResponse;
                if (response != null)
                {
                    using (var reader = new StreamReader(response.GetResponseStream(), Encoding.UTF8))
                    {
                        var data = json.DeserializeObject(reader.ReadToEnd()) as Dictionary<string, object>;
                        if (data != null && data.ContainsKey("error")) throw new InvalidOperationException(Convert.ToString(data["error"]));
                    }
                }
                throw new InvalidOperationException("无法连接管理服务。");
            }
        }

        private static GroupBox CreateGroup(string text)
        {
            return new GroupBox { Text = text, Dock = DockStyle.Fill, ForeColor = Color.FromArgb(167, 216, 235), Padding = new Padding(12) };
        }

        private static TableLayoutPanel CreateGrid(int columns)
        {
            var layout = new TableLayoutPanel { Dock = DockStyle.Fill, ColumnCount = columns, AutoSize = true, AutoSizeMode = AutoSizeMode.GrowAndShrink };
            for (var index = 0; index < columns; index++) layout.ColumnStyles.Add(new ColumnStyle(index % 2 == 0 ? SizeType.AutoSize : SizeType.Percent, index % 2 == 0 ? 0 : 100));
            return layout;
        }

        private static Label LabelFor(string text)
        {
            return new Label { Text = text, AutoSize = true, Anchor = AnchorStyles.Left, Margin = new Padding(3, 8, 10, 8) };
        }

        private static Button PrimaryButton(string text)
        {
            return new Button { Text = text, AutoSize = true, Height = 34, BackColor = Color.FromArgb(103, 216, 245), ForeColor = Color.FromArgb(3, 16, 23), FlatStyle = FlatStyle.Flat, Margin = new Padding(3, 10, 3, 3) };
        }

        private void SetStatus(string text, bool error)
        {
            status.Text = text;
            status.ForeColor = error ? Color.FromArgb(240, 154, 154) : Color.FromArgb(131, 219, 155);
        }

        private sealed class AccountRow
        {
            public string Name { get; set; }
            public string Id { get; set; }
            public string Role { get; set; }
            public string Devices { get; set; }
            public string Status { get; set; }
        }

        private sealed class WikiRow
        {
            public string Id { get; set; }
            public string Title { get; set; }
            public string Type { get; set; }
            public string Summary { get; set; }

            public override string ToString()
            {
                return string.Format("[{0}] {1}", Type, Title);
            }
        }
    }

    internal static class Program
    {
        [STAThread]
        private static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm());
        }
    }
}
